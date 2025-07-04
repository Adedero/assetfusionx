import fs from "node:fs";
import path from "node:path";
import env from "../env";
import { pathToFileURL } from "node:url";

export default class RouteImportCache {
  fileCache: Map<string, boolean>;
  moduleCache: Map<string, unknown>;

  constructor() {
    this.fileCache = new Map<string, boolean>();
    this.moduleCache = new Map<string, unknown>();
  }

  fileExistsCached(filePath: string): boolean {
    if (this.fileCache.has(filePath)) return this.fileCache.get(filePath)!;
    const exists = fs.existsSync(filePath);
    this.fileCache.set(filePath, exists);
    return exists;
  }

  async importCachedModule(filePath: string) {
    const absPath = path.resolve(filePath);

    if (!env.isEnv("dev") && this.moduleCache.has(absPath)) {
      return this.moduleCache.get(absPath);
    }

    try {
      fs.accessSync(absPath);
    } catch {
      throw new Error(`Module file not found: ${absPath}`);
    }

    let rawData: unknown;

    if (env.isEnv("dev")) {
      const module = await import(pathToFileURL(absPath).href);
      rawData = module.default || module;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const module = require(absPath);
      rawData = module.default || module;
      this.moduleCache.set(absPath, rawData);
    }

    return rawData;
  }
}
