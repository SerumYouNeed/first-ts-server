import type { Request, Response } from "express";
import { apiConfig } from "../config.js";

export async function handlerReadiness(_: Request, res: Response) {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("OK");
}

export async function handlerMetrics(_: Request, res: Response) {
    res.set("Cache-Control", "no-store");
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send(`Hits: ${apiConfig.fileServerHits}\n`);
}

export async function handlerResetMetrics(_: Request, res: Response) {
    apiConfig.fileServerHits = 0;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.send("Metrics reset\n");
}