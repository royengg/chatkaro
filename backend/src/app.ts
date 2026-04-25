import express from "express";
import dotenv from "dotenv";
import { PORT } from "./lib/constants";
import { authRouter } from "./route/auth";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
