"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const node_http_1 = __importDefault(require("node:http"));
const helmet_1 = __importDefault(require("helmet"));
const sirv_1 = __importDefault(require("sirv"));
const express_handlebars_1 = require("express-handlebars");
const main_routes_1 = __importDefault(require("./server/routes/main.routes"));
const env_1 = __importDefault(require("./server/utils/env"));
const app = (0, express_1.default)();
const server = node_http_1.default.createServer(app);
const IS_PRODUCTION = env_1.default.get("NODE_ENV") === "production";
//const base = process.env.BASE || "/";
const PORT = env_1.default.get("PORT");
async function main() {
    app.use(express_1.default.json({ limit: "10mb" }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static("public"));
    app.engine("handlebars", (0, express_handlebars_1.engine)());
    app.set("view engine", "handlebars");
    app.set("views", node_path_1.default.resolve("src/server/views"));
    app.use((0, main_routes_1.default)());
    if (!IS_PRODUCTION) {
        /* const { createServer } = await import("vite");
    
        const viteServer = await createServer({
          configFile: path.resolve("vite.config.mts"),
          server: { middlewareMode: true },
          root: path.resolve("src/app"),
          base
        });
    
        app.use(viteServer.middlewares); */
    }
    else {
        app.use((0, helmet_1.default)());
        app.use("/app", (0, sirv_1.default)("build/client", { single: true }));
    }
    /* APP ROUTE HANDLER */
    app.get("/app/{*all}", (req, res) => {
        let HTML_PATH = "";
        if (IS_PRODUCTION) {
            HTML_PATH = "build/client/index.html";
        }
        else {
            HTML_PATH = "src/app/index.html";
        }
        res.sendFile(node_path_1.default.resolve(HTML_PATH));
    });
    /**
     * SERVER EVENT LISTENERS
     */
    server.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
    server.on("error", (error) => {
        console.error(error);
        process.exit(1);
    });
    process.on("SIGINT", () => {
        server.close(() => {
            console.log("Server closed");
            process.exit(0);
        });
    });
}
main();
