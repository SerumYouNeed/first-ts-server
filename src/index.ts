import express, { Request, Response, NextFunction } from "express";

import { middlewareLogResponse, middlewareMetricsInc } from "./api/middleware.js";
import { handlerReadiness, handlerMetrics, handlerResetMetrics } from "./api/readiness.js";

const app = express();
const PORT = 8080;

app.use("/app", express.static("./src/app"));
app.use(middlewareLogResponse);  
app.use(middlewareMetricsInc);
app.get("/reset", handlerResetMetrics);

app.get("/metrics", handlerMetrics);
app.get("/healthz", handlerReadiness);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});