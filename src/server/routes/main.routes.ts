import { Router } from "express";
import homePageData from "#src/content/pages/home";
import app from "#src/content/app";
import investmentOptions from "#src/content/investment-options";
import path from "node:path";
import fs from "node:fs"
import { pathToFileURL } from "url";
import JSONToHTML from "#src/server/utils/helpers/json-to-html"; 

const fileCache = new Map<string, boolean>();
const moduleCache = new Map<string, unknown>();

function isDev() {
  return process.env.NODE_ENV !== "production";
}

function fileExistsCached(filePath: string): boolean {
  if (isDev()) return fs.existsSync(filePath);
  if (fileCache.has(filePath)) return fileCache.get(filePath)!;
  const exists = fs.existsSync(filePath);
  fileCache.set(filePath, exists);
  return exists;
}

async function importCachedModule(filePath: string) {
  if (!isDev() && moduleCache.has(filePath)) {
    return moduleCache.get(filePath);
  }

  const fileURL = pathToFileURL(filePath).href;
  const module = await import(fileURL);
  const rawData = module.default || module;

  if (!isDev()) {
    moduleCache.set(filePath, rawData);
  }

  return rawData;
}


export default function mainRouter() {
  const router = Router();

  router.get("/", (req, res) => {
    res.render("home", { 
      app, 
      data: homePageData,
      investmentOptions
    });
  });

  //other routes
  router.get("/{*all}", async (req, res, next) => {
    const route = req.path.replace(/^\/+/, "");
    if (!route) return next();

    const basePath = process.env.NODE_ENV === "production" ? "build" : "src";
    const viewPath = path.resolve(`${basePath}/server/views/${route}.handlebars`);
    const dataPath = path.resolve(`${basePath}/content/pages/${route}.${isDev() ? "ts" : "js"}`);

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
