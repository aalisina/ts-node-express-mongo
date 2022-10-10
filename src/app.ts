import express from "express";
import config from "config";
import dbConnection from "./utils/dbConnection";

const PORT = config.get<number>("port");
const app = express();

app.listen(PORT, async () => {
  console.log("App esta corriendo");
  await dbConnection();
});
