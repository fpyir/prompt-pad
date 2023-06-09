import { ZodType } from "zod";
import { createRouter } from "next-connect";
import { NextApiResponse } from "next";
import { authenticate, AuthenticatedRequest } from "./authenticate";
import { validateSchema, ParsedRequestBody } from "./validate_schema";
import { HttpMethod } from "@/utils/http_methods";
import { checkAllowedMethods } from "./check_allowed_methods";

type RouteConfig<T> = {
  schema?: ZodType<T>;
  authenticated?: boolean;
  methods?: HttpMethod[];
};

type CombinedRequest<T> = AuthenticatedRequest & ParsedRequestBody<T>;

export const createApiRoute = <T>(config: RouteConfig<T>) => {
  const handler = createRouter<CombinedRequest<T>, NextApiResponse>();

  if (config.authenticated) {
    handler.use(authenticate);
  }

  if (config.schema) {
    handler.use(validateSchema(config.schema));
  }

  if (config.methods) {
    handler.use(checkAllowedMethods(config.methods));
  }

  return handler;
};
