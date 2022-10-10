import { Request, Response, NextFunction } from "express";
// Function returning another function
// Currying is using a function to return another function
const validate =
  (schema) => (req: Request, res: Response, next: NextFunction) => {};
