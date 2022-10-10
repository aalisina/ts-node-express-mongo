import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
// Function returning another function
// Currying is using a function to return another function
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {};
