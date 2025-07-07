"use strict";
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
const zod_1 = require("zod");
const logger_1 = __importDefault(require("../utils/logger"));
const env_1 = __importDefault(require("../utils/env"));
const route_import_cache_1 = __importDefault(require("../utils/classes/route-import-cache"));
const custom_error_1 = __importDefault(require("../utils/classes/custom-error"));
function mainRouter() {
    const router = (0, express_1.Router)();
    const cache = new route_import_cache_1.default();
    router.get("/", (req, res) => {
        res.render("pages/home", {
            app: app_1.default,
            data: home_1.default,
            investmentOptions: investment_options_1.default
        });
    });
    /**
     * Logger route
     */
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
    /**
     * Main routes
     */
    router.get("/{*all}", async (req, res, next) => {
        const route = req.path.replace(/^\/+/, "");
        //if (!route || route.startsWith("about")) return next();
        const basePath = env_1.default.isEnv("dev") ? "src/server" : "build";
        const viewPath = node_path_1.default.resolve(`${basePath}/views/pages/${route}.handlebars`);
        const dataPath = node_path_1.default.resolve(`${basePath.replace("/server", "")}/content/pages/${route}.${env_1.default.isEnv("dev") ? "ts" : "js"}`);
        if (!cache.fileExistsCached(viewPath)) {
            return next();
        }
        let data = {};
        if (cache.fileExistsCached(dataPath)) {
            try {
                data =
                    await cache.importCachedModule(dataPath);
            }
            catch (error) {
                next(new custom_error_1.default(`Failed to import page data for ${route}:`, error));
            }
        }
        res.render(`pages/${route}`, { app: app_1.default, data });
    });
    return router;
}
