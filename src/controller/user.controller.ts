import { Request, Response } from "express";
import { createUserService } from "../services/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../validators/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUserService(req.body); // call create user service
    user.password = "";
    res.status(201).json(user);
  } catch (err: any) {
    logger.error(err);
    res.status(409).send(err.message);
  }
}
