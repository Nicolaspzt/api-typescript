import express from "express";
import type { Request, Response, NextFunction } from "express";
import usuarioRouter from "./routers/usuarioRouter.js";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));

app.use(express.json());

app.use("/", usuarioRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

export default app;