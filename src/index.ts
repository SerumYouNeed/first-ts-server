import express, { Request, Response, NextFunction } from "express";

import { middlewareLogResponse, middlewareMetricsInc } from "./api/middleware.js";
import { handlerReadiness, handlerMetrics, handlerResetMetrics } from "./api/readiness.js";

const app = express();
const PORT = 8080;

app.use(middlewareLogResponse);  
app.use("/app", middlewareMetricsInc, express.static("./src/app"));

app.get("/api/healthz", handlerReadiness);
app.get("/admin/metrics", handlerMetrics);
app.get("/admin/reset", handlerResetMetrics);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});