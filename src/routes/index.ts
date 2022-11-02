import { Express, Request, Response } from "express";
import { createUserSessionHandler } from "../controller/session.controller";
import { createUserHandler } from "../controller/user.controller";
import { createSessionSchema } from "../validators/session.schema";
import { createUserSchema } from "../validators/user.schema";
import validateResource from "../validators/validateResources";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get('/api/sessions', getUserSessionsHandler)
}
export default routes;
