import { Router } from "express";
import homePageData from "#src/content/pages/home";
import app from "#src/content/app";
import investmentOptions from "#src/content/investment-options";
import path from "node:path";
import fs from "node:fs"
import { pathToFileURL } from "url";
import JSONToHTML from "#src/server/utils/helpers/json-to-html"; 
import { z } from "zod";
import logger from "../utils/logger";
import env from "../utils/env";

const fileCache = new Map<string, boolean>();
const moduleCache = new Map<string, unknown>();

export default function mainRouter() {
  const router = Router();

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
    if (!route) return next();

    const basePath = isDev() ? "src/server" : "build"
    const viewPath = path.resolve(`${basePath}/views/${route}.handlebars`);
    const dataPath = path.resolve(`${basePath.replace("/server", "")}/content/pages/${route}.${isDev() ? "ts" : "js"}`);

    if (!fileExistsCached(viewPath)) {
      return next();
    }

    let data: string | null = null;

    if (fileExistsCached(dataPath)) {
      try {
        const rawData = await importCachedModule(dataPath);
        data = JSONToHTML(rawData);
      } catch (err) {
        console.error(`Failed to import page data for ${route}:`, err);
      }
    }

    res.render(route, {
      app,
      data
    });
  });

  return router;
}


function isDev() {
  return (
    env.get("NODE_ENV") === "development" || 
    env.get("NODE_ENV") !== "production"
  )
}

function fileExistsCached(filePath: string): boolean {
  if (fileCache.has(filePath)) return fileCache.get(filePath)!;
  const exists = fs.existsSync(filePath);
  fileCache.set(filePath, exists);
  return exists;
}

export async function importCachedModule(filePath: string) {
  const absPath = path.resolve(filePath);

  if (!isDev() && moduleCache.has(absPath)) {
    return moduleCache.get(absPath);
  }

  // Make sure file exists
  try {
    fs.accessSync(absPath);
  } catch {
    throw new Error(`Module file not found: ${absPath}`);
  }

  let rawData;

  if (isDev()) {
    // In dev: use dynamic ESM import
    const module = await import(pathToFileURL(absPath).href);
    rawData = module.default || module;
  } else {
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

