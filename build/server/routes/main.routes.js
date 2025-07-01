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
exports.default = mainRouter;
exports.importCachedModule = importCachedModule;
const express_1 = require("express");
const home_1 = __importDefault(require("#src/content/pages/home"));
const app_1 = __importDefault(require("#src/content/app"));
const investment_options_1 = __importDefault(require("#src/content/investment-options"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const url_1 = require("url");
const json_to_html_1 = __importDefault(require("#src/server/utils/helpers/json-to-html"));
const zod_1 = require("zod");
const logger_1 = __importDefault(require("../utils/logger"));
const env_1 = __importDefault(require("../utils/env"));
const fileCache = new Map();
const moduleCache = new Map();
function mainRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.render("home", {
            app: app_1.default,
            data: home_1.default,
            investmentOptions: investment_options_1.default
        });
    });
    //Logging
    router.post("/logger", (req, res) => {
        const Schema = zod_1.z.object({
            level: zod_1.z.enum(["debug", "error", "info", "warn"]),
            message: zod_1.z.string().trim().nonempty(),
            error: zod_1.z.any()
        });
        const { data, success, error } = Schema.safeParse(req.body);
        if (!success) {
            res.status(400).json({
                success: false,
                message: error.errors[0].message
            });
            return;
        }
        if (data.level === "error") {
            logger_1.default[data.level](data.message, data.error);
        }
        else {
            logger_1.default[data.level](data.message);
        }
        res.status(200).json({
            success: true,
            message: "Message logged."
        });
    });
    //other routes
    router.get("/{*all}", async (req, res, next) => {
        const route = req.path.replace(/^\/+/, "");
        if (!route)
            return next();
        const basePath = isDev() ? "src/server" : "build";
        const viewPath = node_path_1.default.resolve(`${basePath}/views/${route}.handlebars`);
        const dataPath = node_path_1.default.resolve(`${basePath.replace("/server", "")}/content/pages/${route}.${isDev() ? "ts" : "js"}`);
        if (!fileExistsCached(viewPath)) {
            return next();
        }
        let data = null;
        if (fileExistsCached(dataPath)) {
            try {
                const rawData = await importCachedModule(dataPath);
                data = (0, json_to_html_1.default)(rawData);
            }
            catch (err) {
                console.error(`Failed to import page data for ${route}:`, err);
            }
        }
        res.render(route, {
            app: app_1.default,
            data
        });
    });
    return router;
}
function isDev() {
    return (env_1.default.get("NODE_ENV") === "development" ||
        env_1.default.get("NODE_ENV") !== "production");
}
function fileExistsCached(filePath) {
    if (fileCache.has(filePath))
        return fileCache.get(filePath);
    const exists = node_fs_1.default.existsSync(filePath);
    fileCache.set(filePath, exists);
    return exists;
}
async function importCachedModule(filePath) {
    const absPath = node_path_1.default.resolve(filePath);
    if (!isDev() && moduleCache.has(absPath)) {
        return moduleCache.get(absPath);
    }
    // Make sure file exists
    try {
        node_fs_1.default.accessSync(absPath);
    }
    catch {
        throw new Error(`Module file not found: ${absPath}`);
    }
    let rawData;
    if (isDev()) {
        // In dev: use dynamic ESM import
        const module = await Promise.resolve(`${(0, url_1.pathToFileURL)(absPath).href}`).then(s => __importStar(require(s)));
        rawData = module.default || module;
    }
    else {
        // In prod: use CommonJS require (works with compiled .js)
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const module = require(absPath);
        rawData = module.default || module;
    }
    if (!isDev()) {
        moduleCache.set(absPath, rawData);
    }
    return rawData;
}
