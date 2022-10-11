import { Request, Response } from "express";
import { omit } from "lodash";
import { createUserService } from "../services/user.service";
import logger from "../utils/logger";
import { CreateUserInput } from "../validators/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUserService(req.body); // call create user service
    res.status(201).send(omit(user.toJSON()), "password");
  } catch (err: any) {
    logger.error(err);
    res.status(409).send(err.message);
  }
}
