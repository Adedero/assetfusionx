"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const env_1 = __importDefault(require("../env"));
const node_url_1 = require("node:url");
class RouteImportCache {
    fileCache;
    moduleCache;
    constructor() {
        this.fileCache = new Map();
        this.moduleCache = new Map();
    }
    fileExistsCached(filePath) {
        if (this.fileCache.has(filePath))
            return this.fileCache.get(filePath);
        const exists = node_fs_1.default.existsSync(filePath);
        this.fileCache.set(filePath, exists);
        return exists;
    }
    async importCachedModule(filePath) {
        const absPath = node_path_1.default.resolve(filePath);
        if (!env_1.default.isEnv("dev") && this.moduleCache.has(absPath)) {
            return this.moduleCache.get(absPath);
        }
        try {
            node_fs_1.default.accessSync(absPath);
        }
        catch {
            throw new Error(`Module file not found: ${absPath}`);
        }
        let rawData;
        if (env_1.default.isEnv("dev")) {
            const module = await Promise.resolve(`${(0, node_url_1.pathToFileURL)(absPath).href}`).then(s => __importStar(require(s)));
            rawData = module.default || module;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const module = require(absPath);
            rawData = module.default || module;
            this.moduleCache.set(absPath, rawData);
        }
        return rawData;
    }
}
exports.default = RouteImportCache;
