import { ZodType } from "zod";
import { NextHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticatedRequest } from "./authenticate";
import { HttpMethod, validateHttpMethod } from "@/utils/http_methods";

// Middleware function for checking allowed methods
export const checkAllowedMethods = (methods: HttpMethod[]) => {
  return async (
    req: NextApiRequest,
    res: NextApiResponse,
    next: NextHandler
  ) => {
    try {
      validateHttpMethod(req.method, methods);
      await next();
    } catch (error) {
      console.error("Method not allowed:", error);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
};
