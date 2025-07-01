import { Env } from "./env";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(54321),
});

// Create typed environment instance
const env = new Env(envSchema, { createExampleEnv: true });
export default env;


// Export types for use in other files
export type EnvSchema = typeof envSchema;
export type EnvType = z.infer<typeof envSchema>;