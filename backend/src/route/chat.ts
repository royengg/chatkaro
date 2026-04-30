import { Router } from "express";
import { prisma } from "../db/prismadb";
import { authMiddleware } from "../middleware/auth";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";

export const chatRouter = Router();

chatRouter.post("/create", authMiddleware, async (req: any, res: Response) => {
  const user = req.user;
});
