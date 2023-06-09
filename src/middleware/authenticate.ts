import { NextApiRequest, NextApiResponse } from "next";
import nc, { NextHandler } from "next-connect";
import { verifyIdToken, AuthUser } from "next-firebase-auth";

// Extend the NextApiRequest type with the user property
export type AuthenticatedRequest = NextApiRequest & {
  user?: AuthUser;
};

// Middleware function for authentication
export const authenticate = async (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(403).json({ error: "No token provided" });
    }

    const decodedToken = await verifyIdToken(token);

    // You can access the user's decoded token data via decodedToken.uid, decodedToken.email, etc.
    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(403).json({ error: "Authentication failed" });
  }
};
