import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { z, ZodTypeAny, ZodError } from "zod";

export interface EnvOptions {
  createExampleEnv?: boolean;
}

export interface SetEnvOptions {
  env?: string;
}

type NodeEnv = "dev" | "development" | "test" | "prod" | "production";

export class Env<T extends ZodTypeAny = ZodTypeAny> {
  private schema?: T;
  private parsed?: z.infer<T>;
  private isDev: boolean;
  private createExampleEnv: boolean;

  constructor(schema?: T, options: EnvOptions = {}) {
    dotenv.config();
    this.schema = schema;
    this.isDev = process.env.NODE_ENV !== "production";
    this.createExampleEnv = options.createExampleEnv ?? false;

    if (this.schema) {
      const result = this.schema.safeParse(process.env);
      if (!result.success) {
        throw new Error(
          `Invalid environment variables:\n${this.formatZodError(result.error)}`
        );
      }
      this.parsed = result.data;

      if (this.isDev && this.createExampleEnv) {
        this.generateExampleEnv();
      }
    }
  }

  isNodeEnv(value: NodeEnv) {
    if (value === "dev" || value === "development") {
      return (
        !this.getSafe("NODE_ENV") ||
        this.getSafe("NODE_ENV") === value ||
        this.getSafe("NODE_ENV") !== "production" ||
        this.getSafe("NODE_ENV") !== "test"
      );
    } else {
      return this.getSafe("NODE_ENV") === value;
    }
  }

  get<K extends keyof z.infer<T>>(key: K): z.infer<T>[K];
  get(key: string): string;
  get(key: string, fallback: string): string;
  get(key: string, fallback?: string): unknown {
    if (this.schema && this.parsed && key in this.parsed) {
      return this.parsed[key as keyof typeof this.parsed];
    }

    const val = process.env[key];

    if (val !== undefined) {
      return val;
    }

    if (fallback !== undefined) {
      return fallback;
    }

    throw new Error(`Environment variable "${key}" is not defined`);
  }

  getSafe(key: string, fallback?: string): string | undefined {
    const val = process.env[key];
    return val ?? fallback;
  }

  has(key: string): boolean {
    return process.env[key] !== undefined;
  }

  async set(key: string, value: string, options: SetEnvOptions = {}) {
    if (!this.isDev) return; // Only allow setting in dev mode

    const envFile = options.env || ".env";
    const envPath = path.resolve(process.cwd(), envFile);

    let content = "";
    try {
      content = await fs.readFile(envPath, "utf-8");
    } catch {
      // File might not exist, no problem
    }

    const lines = content.split("\n");
    const updated = lines.map((line) => {
      if (line.startsWith(`${key}=`)) return `${key}=${value}`;
      return line;
    });

    if (!lines.some((line) => line.startsWith(`${key}=`))) {
      updated.push(`${key}=${value}`);
    }

    await fs.writeFile(envPath, updated.join("\n"), "utf-8");
    process.env[key] = value;
  }

  getAll(): z.infer<T> | Record<string, string> {
    if (this.schema && this.parsed) {
      return this.parsed;
    }

    const raw: Record<string, string> = {};
    for (const [key, value] of Object.entries(process.env)) {
      if (typeof value === "string") {
        raw[key] = value;
      }
    }

    return raw;
  }

  getSchema(): T | undefined {
    return this.schema;
  }

  private formatZodError(error: ZodError): string {
    return error.errors
      .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
      .join("\n");
  }

  private async generateExampleEnv() {
    if (!this.schema) return;

    const shape = (this.schema as ZodTypeAny)._def.shape();
    const lines: string[] = [];

    for (const key in shape) {
      const def = shape[key]?._def;
      let defaultVal = def?.defaultValue;

      if (typeof defaultVal === "function") {
        defaultVal = defaultVal();
      }

      lines.push(`${key}=${defaultVal ?? ""}`);
    }

    const content = lines.join("\n");
    const examplePath = path.resolve(process.cwd(), ".env.example");

    try {
      await fs.writeFile(examplePath, content, "utf-8");
    } catch (err) {
      console.error("Failed to write .env.example:", err);
    }
  }
}
