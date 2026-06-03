import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { loadEnv } from "./config/env.js";
import healthRouter from "./routes/health.js";
import registerRouter from "./routes/register.js";

const app = express();
const env = loadEnv();

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
  }),
);
app.use(express.json({ limit: "100kb" }));
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ success: true, message: "Backend API is running." });
});

app.use("/api/health", healthRouter);
app.use("/api/register", registerRouter);

export default app;
