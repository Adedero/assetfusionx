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
exports.default = viteServer;
const node_path_1 = __importDefault(require("node:path"));
const env_1 = __importDefault(require("../utils/env"));
const helmet_1 = __importDefault(require("helmet"));
const sirv_1 = __importDefault(require("sirv"));
async function viteServer(app) {
    const base = env_1.default.getSafe("BASE", "/");
    if (env_1.default.isNodeEnv("development")) {
        const { createServer } = await Promise.resolve().then(() => __importStar(require("vite")));
        const viteServer = await createServer({
            configFile: node_path_1.default.resolve("vite.config.mts"),
            server: { middlewareMode: true },
            root: node_path_1.default.resolve("src/app"),
            base,
        });
        app.use(viteServer.middlewares);
    }
    else {
        app.use((0, helmet_1.default)());
        app.use("/app", (0, sirv_1.default)("build/client", { single: true }));
    }
    /* APP ROUTE HANDLER */
    app.get("/app{/*all}", (req, res) => {
        let HTML_PATH = "";
        if (env_1.default.isNodeEnv("production")) {
            HTML_PATH = "build/client/index.html";
        }
        else {
            HTML_PATH = "src/app/index.html";
        }
        res.sendFile(node_path_1.default.resolve(HTML_PATH));
    });
}
