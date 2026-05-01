import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { JWT_SECRET } from "../lib/constants";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
