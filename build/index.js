"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const node_http_1 = __importDefault(require("node:http"));
const express_handlebars_1 = require("express-handlebars");
const main_routes_1 = __importDefault(require("./server/routes/main.routes"));
const env_1 = __importDefault(require("./server/utils/env"));
const logger_1 = __importDefault(require("./server/utils/logger"));
const http_logger_1 = __importDefault(require("./server/middleware/http-logger"));
const vite_1 = __importDefault(require("./server/middleware/vite"));
const app = (0, express_1.default)();
const server = node_http_1.default.createServer(app);
const PORT = env_1.default.get("PORT");
async function main() {
    app.use(express_1.default.json({ limit: "10mb" }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.static("public"));
    app.engine("handlebars", (0, express_handlebars_1.engine)());
    app.set("view engine", "handlebars");
    app.set("views", node_path_1.default.resolve("src/server/views"));
    app.use(http_logger_1.default);
    /**
     * Routes for static pages
     */
    app.use((0, main_routes_1.default)());
    /**
     * Vite dev server and dymanic SPA router
     */
    await (0, vite_1.default)(app);
    /**
     * SERVER EVENT LISTENERS
     */
    server.listen(PORT, () => {
        let location = "";
        if (env_1.default.isNodeEnv("dev")) {
            location = `http://localhost:${PORT}`;
        }
        else {
            location = `port ${PORT}`;
        }
        logger_1.default.info(`Server running on ${location}`);
    });
    server.on("error", (error) => {
        logger_1.default.error("HTTP Server Error", error);
        process.exit(1);
    });
    process.on("SIGINT", () => {
        server.close(() => {
            logger_1.default.info("Server closed");
            process.exit(0);
        });
    });
}
main();
