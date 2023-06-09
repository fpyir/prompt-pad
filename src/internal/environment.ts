import { z } from "zod";

// Define the type for the validated environment variables
export interface EnvironmentConfig {
  FIREBASE_PRIVATE_KEY: string;
  COOKIE_SECRET_CURRENT: string;
  COOKIE_SECRET_PREVIOUS: string;

  FIREBASE_ADMIN_PROJECT_ID: string;
  FIREBASE_ADMIN_CLIENT_EMAIL: string;
  FIREBASE_ADMIN_DATABASE_URL: string;

  FIREBASE_CLIENT_API_KEY: string;
  FIREBASE_CLIENT_AUTH_DOMAIN: string;
  FIREBASE_CLIENT_DATABASE_URL: string;
  FIREBASE_CLIENT_PROJECT_ID: string;
}

// Define the schema for the environment variables

const environmentSchema = z.object({
  FIREBASE_PRIVATE_KEY: z.string(),
  COOKIE_SECRET_CURRENT: z.string(),
  COOKIE_SECRET_PREVIOUS: z.string(),

  FIREBASE_ADMIN_PROJECT_ID: z.string(),
  FIREBASE_ADMIN_CLIENT_EMAIL: z.string().email(),
  FIREBASE_ADMIN_DATABASE_URL: z.string().url(),

  FIREBASE_CLIENT_API_KEY: z.string(),
  FIREBASE_CLIENT_AUTH_DOMAIN: z.string(),
  FIREBASE_CLIENT_DATABASE_URL: z.string().url(),
  FIREBASE_CLIENT_PROJECT_ID: z.string(),
});

// Validate the environment variables against the schema
const environmentVars = environmentSchema.parse(process.env);

// Export the validated environment variables
export const environmentConfig: EnvironmentConfig =
  environmentVars as EnvironmentConfig;
