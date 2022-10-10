import mongoose from "mongoose";
import config from "config";

function connectDatabase() {
  const dbUri = config.get<string>("dbUri");
  return mongoose
    .connect(dbUri)
    .then(() => console.log("Connected to DB"))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
}

export default connectDatabase;
