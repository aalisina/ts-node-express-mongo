import { Request, Response } from "express";
import logger from "../utils/logger";
export function createUserHandler(req: Request, res: Response) {
  try {
    //const user = await; // call create user service
  } catch (err: any) {
    logger.error(err);
    res.status(409).send(err.message);
  }
}
