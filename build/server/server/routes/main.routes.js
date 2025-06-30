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
const express_1 = require("express");
const home_1 = __importDefault(require("#src/content/pages/home"));
const app_1 = __importDefault(require("#src/content/app"));
const investment_options_1 = __importDefault(require("#src/content/investment-options"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const url_1 = require("url");
const json_to_html_1 = __importDefault(require("#src/server/utils/helpers/json-to-html"));
const fileCache = new Map();
const moduleCache = new Map();
function isDev() {
    return process.env.NODE_ENV !== "production";
}
function fileExistsCached(filePath) {
    if (isDev())
        return node_fs_1.default.existsSync(filePath);
    if (fileCache.has(filePath))
        return fileCache.get(filePath);
    const exists = node_fs_1.default.existsSync(filePath);
    fileCache.set(filePath, exists);
    return exists;
}
async function importCachedModule(filePath) {
    if (!isDev() && moduleCache.has(filePath)) {
        return moduleCache.get(filePath);
    }
    const fileURL = (0, url_1.pathToFileURL)(filePath).href;
    const module = await Promise.resolve(`${fileURL}`).then(s => __importStar(require(s)));
    const rawData = module.default || module;
    if (!isDev()) {
        moduleCache.set(filePath, rawData);
    }
    return rawData;
}
function mainRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.render("home", {
            app: app_1.default,
            data: home_1.default,
            investmentOptions: investment_options_1.default
        });
    });
    //other routes
    router.get("/{*all}", async (req, res, next) => {
        const route = req.path.replace(/^\/+/, "");
        if (!route)
            return next();
        const basePath = process.env.NODE_ENV === "production" ? "build" : "src";
        const viewPath = node_path_1.default.resolve(`${basePath}/server/views/${route}.handlebars`);
        const dataPath = node_path_1.default.resolve(`${basePath}/content/pages/${route}.${isDev() ? "ts" : "js"}`);
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
