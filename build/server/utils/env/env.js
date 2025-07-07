"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class Env {
    schema;
    parsed;
    isDev;
    createExampleEnv;
    constructor(schema, options = {}) {
        dotenv_1.default.config();
        this.schema = schema;
        this.isDev = process.env.NODE_ENV !== "production";
        this.createExampleEnv = options.createExampleEnv ?? false;
        if (this.schema) {
            const result = this.schema.safeParse(process.env);
            if (!result.success) {
                throw new Error(`Invalid environment variables:\n${this.formatZodError(result.error)}`);
            }
            this.parsed = result.data;
            if (this.isDev && this.createExampleEnv) {
                this.generateExampleEnv();
            }
        }
    }
    isNodeEnv(value) {
        if (value === "dev" || value === "development") {
            return (process.env.NODE_ENV === undefined ||
                process.env.NODE_ENV === value);
        }
        else {
            return process.env.NODE_ENV === value;
        }
    }
    get(key, fallback) {
        if (this.schema && this.parsed && key in this.parsed) {
            return this.parsed[key];
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
    getSafe(key, fallback) {
        const val = process.env[key];
        return val ?? fallback;
    }
    has(key) {
        return process.env[key] !== undefined;
    }
    async set(key, value, options = {}) {
        if (!this.isDev)
            return; // Only allow setting in dev mode
        const envFile = options.env || ".env";
        const envPath = path_1.default.resolve(process.cwd(), envFile);
        let content = "";
        try {
            content = await promises_1.default.readFile(envPath, "utf-8");
        }
        catch {
            // File might not exist, no problem
        }
        const lines = content.split("\n");
        const updated = lines.map((line) => {
            if (line.startsWith(`${key}=`))
                return `${key}=${value}`;
            return line;
        });
        if (!lines.some((line) => line.startsWith(`${key}=`))) {
            updated.push(`${key}=${value}`);
        }
        await promises_1.default.writeFile(envPath, updated.join("\n"), "utf-8");
        process.env[key] = value;
    }
    getAll() {
        if (this.schema && this.parsed) {
            return this.parsed;
        }
        const raw = {};
        for (const [key, value] of Object.entries(process.env)) {
            if (typeof value === "string") {
                raw[key] = value;
            }
        }
        return raw;
    }
    getSchema() {
        return this.schema;
    }
    formatZodError(error) {
        return error.errors
            .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
            .join("\n");
    }
    async generateExampleEnv() {
        if (!this.schema)
            return;
        const shape = this.schema._def.shape();
        const lines = [];
        for (const key in shape) {
            const def = shape[key]?._def;
            let defaultVal = def?.defaultValue;
            if (typeof defaultVal === "function") {
                defaultVal = defaultVal();
            }
            lines.push(`${key}=${defaultVal ?? ""}`);
        }
        const content = lines.join("\n");
        const examplePath = path_1.default.resolve(process.cwd(), ".env.example");
        try {
            await promises_1.default.writeFile(examplePath, content, "utf-8");
        }
        catch (err) {
            console.error("Failed to write .env.example:", err);
        }
    }
}
exports.Env = Env;
