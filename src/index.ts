import express, { Express } from "express";
import path from "node:path";
import http from "node:http";
import { engine } from "express-handlebars";
import mainRouter from "./server/routes/main.routes";
import env from "./server/utils/env";
import logger from "./server/utils/logger";
import viteServer from "./server/middleware/vite";

const app: Express = express();
const server = http.createServer(app);
const PORT = env.get("PORT");

async function main() {
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.engine("handlebars", engine());
  app.set("view engine", "handlebars");
  app.set("views", path.resolve("src/server/views"));

  /**
   * Routes for static pages
   */
  app.use(mainRouter());

  /**
   * Vite dev server and dymanic SPA router
   */
  await viteServer(app);

  /**
   * SERVER EVENT LISTENERS
   */
  server.listen(PORT, () => {
    let location: string = "";

    if (env.isNodeEnv("dev")) {
      location = `http://localhost:${PORT}`;
    } else {
      location = `port ${PORT}`;
    }

    logger.info(`Server running on ${location}`);
  });

  server.on("error", (error) => {
    logger.error("HTTP Server Error", error);
    process.exit(1);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      logger.info("Server closed");
      process.exit(0);
    });
  });
}

main();
