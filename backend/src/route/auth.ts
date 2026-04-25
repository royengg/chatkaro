import { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../lib/constants";
import { prisma } from "../db/prismadb";
import { signUpSchema } from "../schemas/auth";
import bcrypt from "bcrypt";

export const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const parse = signUpSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Bad payload" });
  }
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET as string);

    return res.status(201).json({
      token,
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

authRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET as string);

    return res.status(200).json({
      token,
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
