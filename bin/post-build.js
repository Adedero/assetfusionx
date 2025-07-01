/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("node:path");
const fs = require("node:fs");

function main() {
  copyHandlebarViews();
}

function copyHandlebarViews() {
  const oldViewsPath = path.resolve("src/server/views");
  const newViewsPath = path.resolve("build/views");

  try {
    fs.cpSync(oldViewsPath, newViewsPath, { recursive: true });
    console.log("✅ Handlebar views copied successfully!");
  } catch (err) {
    console.error("Error copying handlebar views", err);
  }
}


main();