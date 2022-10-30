import { Request, Response } from "express";
import { createSession } from "../services/session.service";
import { validatePassword } from "../services/validatePassword";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user's pwd
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }
  // create a session
  const session = createSession(user._id, req.get("user-agent") || "");
  // create an access token
  // create a refresh token
  // return access and refresh tokens
}
