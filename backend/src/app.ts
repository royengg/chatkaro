import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./route/auth";
import { authMiddleware } from "./middleware/auth";
import { chatRouter } from "./route/chat";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

export default app;
