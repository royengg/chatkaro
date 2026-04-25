import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { JWT_SECRET } from "../lib/constants";

export interface AuthenticatedRequest extends Request {
  user: JwtPayload;
}

export async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
