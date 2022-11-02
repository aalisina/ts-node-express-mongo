import express from "express";
import config from "config";
import dbConnection from "./utils/dbConnection";
import logger from "./utils/logger";
import routes from "./routes";
import { deserializeUser } from "./middlewares/deserializeUser";

const PORT = config.get<number>("port");
const app = express();

app.use(express.json());
app.use(deserializeUser);

app.listen(PORT, async () => {
  logger.info("App esta corriendo");
  await dbConnection();

  routes(app);
});
