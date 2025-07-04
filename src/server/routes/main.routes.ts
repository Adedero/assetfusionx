import { Router } from "express";
import homePageData from "#src/content/pages/home";
import app from "#src/content/app";
import investmentOptions from "#src/content/investment-options";
import path from "node:path";
import JSONToHTML, { JSONTree } from "#src/server/utils/helpers/json-to-html";
import { z } from "zod";
import logger from "../utils/logger";
import env from "../utils/env";
import RouteImportCache from "../utils/classes/route-import-cache";
import CustomError from "../utils/classes/custom-error";

export default function mainRouter() {
  const router = Router();

  const cache = new RouteImportCache();

  router.get("/", (req, res) => {
    res.render("home", {
      app,
      data: homePageData,
      investmentOptions
    });
  });

  //Logging
  router.post("/logger", (req, res) => {
    const Schema = z.object({
      level: z.enum(["debug", "error", "info", "warn"]),
      message: z.string().trim().nonempty(),
      error: z.any()
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
      logger[data.level](data.message, data.error);
    } else {
      logger[data.level](data.message);
    }

    res.status(200).json({
      success: true,
      message: "Message logged."
    });
  });

  //other routes
  router.get("/{*all}", async (req, res, next) => {
    const route = req.path.replace(/^\/+/, "");
    if (!route || !route.startsWith("investments")) return next();

    const basePath = env.isEnv("dev") ? "src/server" : "build";
    const viewPath = path.resolve(`${basePath}/views/${route}.handlebars`);
    const dataPath = path.resolve(
      `${basePath.replace("/server", "")}/content/pages/${route}.${env.isEnv("dev") ? "ts" : "js"}`
    );

    if (!cache.fileExistsCached(viewPath)) {
      return next();
    }

    let data;

    if (cache.fileExistsCached(dataPath)) {
      try {
        data = await cache.importCachedModule(dataPath);
      } catch (error) {
        next(
          new CustomError(`Failed to import page data for ${route}:`, error)
        );
      }
    }

    res.render(route, { app, data });
  });

  //other routes
  router.get("/{*all}", async (req, res, next) => {
    const route = req.path.replace(/^\/+/, "");
    if (!route) return next();

    const basePath = env.isEnv("dev") ? "src/server" : "build";
    const viewPath = path.resolve(`${basePath}/views/${route}.handlebars`);
    const dataPath = path.resolve(
      `${basePath.replace("/server", "")}/content/pages/${route}.${env.isEnv("dev") ? "ts" : "js"}`
    );

    if (!cache.fileExistsCached(viewPath)) {
      return next();
    }

    let data: string | null = null;

    if (cache.fileExistsCached(dataPath)) {
      try {
        const rawData = await cache.importCachedModule(dataPath);
        data = JSONToHTML(rawData as JSONTree[]);
      } catch (err) {
        console.error(`Failed to import page data for ${route}:`, err);
      }
    }

    res.render(route, {
      app,
      partners: homePageData.partners,
      data
    });
  });

  return router;
}
