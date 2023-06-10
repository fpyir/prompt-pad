import { z } from "zod";

// Define the type for the validated environment variables
export interface EnvironmentConfig {
  GITHUB_ID: string;
  GITHUB_SECRET: string;
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
  COOKIE_SECRET_CURRENT: string;
  COOKIE_SECRET_PREVIOUS: string;
}

// Define the schema for the environment variables
const environmentSchema = z.object({
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  GOOGLE_ID: z.string(),
  GOOGLE_SECRET: z.string(),
  COOKIE_SECRET_CURRENT: z.string(),
  COOKIE_SECRET_PREVIOUS: z.string(),
});

export function getEnvironment(): EnvironmentConfig {
  // Validate the environment variables against the schema
  const environmentVars = environmentSchema.parse(process.env);

  // Return the validated environment variables
  return environmentVars as EnvironmentConfig;
}
