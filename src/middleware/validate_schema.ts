import { NextApiRequest, NextApiResponse } from "next";
import { ZodType } from "zod";
import { NextHandler } from "next-connect";

// Define a type for the parsed request body
export type ParsedRequestBody<T> = NextApiRequest & { parsed: T };

// Middleware function for schema validation
export const validateSchema =
  <T>(schema: ZodType<T>) =>
  async (
    req: NextApiRequest & { body: T },
    res: NextApiResponse,
    next: NextHandler
  ) => {
    try {
      const parsedData = schema.parse(req.body);
      const modifiedReq = req as ParsedRequestBody<T>;
      modifiedReq.parsed = parsedData;
      await next();
    } catch (error) {
      console.error("Schema validation error:", error);
      // Handle validation error, e.g., return a specific error response
      return res.status(400).json({ error: "Invalid data" });
    }
  };
