import { Env } from "./env";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(54321)
});
// Export types for use in other files
export type EnvSchema = typeof envSchema;
export type EnvType = z.infer<typeof envSchema>;

// Create typed environment instance
const env = new Env(envSchema, { createExampleEnv: process.env.NODE_ENV !== "production" });
export default env;
