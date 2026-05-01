import { Router, Request, Response } from "express";
import { prisma } from "../db/prismadb";
import { authMiddleware } from "../middleware/auth";
import { createChatSchema } from "../schemas/chat";

export const chatRouter = Router();

chatRouter.post(
  "/create",
  authMiddleware,
  async (req: Request, res: Response) => {
    const parsed = createChatSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    const user = req.user;

    try {
      const chat = await prisma.room.create({
        data: {
          name: parsed.data.name,
          userId: user?.id,
          createdAt: new Date(),
        },
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  },
);
