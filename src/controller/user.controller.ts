import { Request, Response } from "express";
import { createUserService } from "../services/user.service";
import logger from "../utils/logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUserService(req.body); // call create user service
  } catch (err: any) {
    logger.error(err);
    res.status(409).send(err.message);
  }
}
