import config from "config";
import { Request, Response } from "express";
import { createSession } from "../services/session.service";
import { validatePassword } from "../services/validatePassword";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user's pwd
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }
  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "");
  // create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 mins
  );
  // create a refresh token
  // return access and refresh tokens
}
