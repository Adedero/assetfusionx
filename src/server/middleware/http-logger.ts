import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export default function httpLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method.toUpperCase()} - ${req.originalUrl}`);
  next();
}