import { AUTH_OPTIONS, getServerSession } from "@/internal/authentication";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "next-auth";
import nc, { NextHandler } from "next-connect";

// Extend the NextApiRequest type with the user property
export type AuthenticatedRequest = NextApiRequest & {
  user?: User;
};

// Middleware function for authentication
export const authenticate = async (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    const session = await getServerSession(req, res);

    if (!session || !session.user) {
      return res.status(403).json({ error: "Authentication failed" });
    }

    req.user = session.user;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(403).json({ error: "Authentication failed" });
  }
};
