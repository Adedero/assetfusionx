/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("node:path");
const fs = require("node:fs");

function main() {
  removeBuildDir();
}

function removeBuildDir() {
  const dir = path.resolve("build");

  try {
    if (fs.rmSync(dir, { recursive: true, force: true })) {
      fs.unlinkSync(dir);
    }
  } catch (error) {
    console.error("Error removing build director", error);
  }
}


main();