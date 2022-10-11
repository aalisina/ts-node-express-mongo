import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
// Function returning another function
// Currying is using a function to return another function
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // allows us to create schemas to validate the body, query and params of requests
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.error);
    }
  };

export default validate;
