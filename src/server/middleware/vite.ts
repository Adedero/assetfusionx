import path from "node:path";
import env from "../utils/env";
import helmet from "helmet";
import sirv from "sirv";
import type { Express } from "express";

export default async function viteServer(app: Express) {
  const base = env.getSafe("BASE", "/");

  if (env.isNodeEnv("development")) {
    const { createServer } = await import("vite");

    const viteServer = await createServer({
      configFile: path.resolve("vite.config.mts"),
      server: { middlewareMode: true },
      root: path.resolve("src/app"),
      base
    });

    app.use(viteServer.middlewares);
  } else {
    app.use(helmet());
    app.use("/app", sirv("build/client", { single: true }));
  }

  /* APP ROUTE HANDLER */
  app.get("/app{/*all}", (req, res) => {
    let HTML_PATH: string = "";

    if (env.isNodeEnv("production")) {
      HTML_PATH = "build/client/index.html";
    } else {
      HTML_PATH = "src/app/index.html";
    }

    res.sendFile(path.resolve(HTML_PATH));
  });
}