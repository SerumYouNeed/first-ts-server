import type { Request, Response } from "express";
import { apiConfig } from "../config.js";

export async function handlerReadiness(_: Request, res: Response) {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("OK");
}

export async function handlerMetrics(_: Request, res: Response) {
    res.set("Cache-Control", "no-store");
    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(`<html>
  <body>
    <h1>Welcome, Chirpy Admin</h1>
    <p>Chirpy has been visited NUM times!</p>
  </body>
</html>`.replace("NUM", apiConfig.fileServerHits.toString()));
}

export async function handlerResetMetrics(_: Request, res: Response) {
  apiConfig.fileServerHits = 0;
  res.write("Hits reset to 0");
  res.end();
}