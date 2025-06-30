import express, { Express } from "express";
import path from "node:path";
import http from "node:http";
import helmet from "helmet";
import sirv from "sirv";
import { engine } from "express-handlebars";
import mainRouter from "./server/routes/main.routes";

const app: Express = express();
const server = http.createServer(app);
const isProduction = process.env.NODE_ENV === "production";
//const base = process.env.BASE || "/";
const port = process.env.PORT || 54321;

async function main() {
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.engine("handlebars", engine());
  app.set("view engine", "handlebars");
  app.set("views", path.resolve("src/server/views"));

  app.use(mainRouter());

  if (!isProduction) {
    /* const { createServer } = await import("vite");

    const viteServer = await createServer({
      configFile: path.resolve("vite.config.mts"),
      server: { middlewareMode: true },
      root: path.resolve("src/app"),
      base
    });

    app.use(viteServer.middlewares); */
  } else {
    app.use(helmet());
    app.use("/app", sirv("build/client", { single: true }));
  }

  /* APP ROUTE HANDLER */
  app.get("/app/{*all}", (req, res) => {
    let HTML_PATH: string = "";

    if (isProduction) {
      HTML_PATH = "build/client/index.html";
    } else {
      HTML_PATH = "src/app/index.html";
    }

    res.sendFile(path.resolve(HTML_PATH));
  });

  /**
   * SERVER EVENT LISTENERS
   */
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
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
