"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "production", "test"]).default("development"),
    PORT: zod_1.z.coerce.number().default(54321)
});
// Create typed environment instance
const env = new env_1.Env(envSchema, { createExampleEnv: true });
exports.default = env;
