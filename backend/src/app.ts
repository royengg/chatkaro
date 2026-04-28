import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./route/auth";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);

export default app;
