import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  jwt.sign(object, privateKey, {
    // check that option is defined before we spread it, we can do that by && options
    ...(options && options),
    algorithm: "RS256",
  });
}

function verifyJwt() {}
