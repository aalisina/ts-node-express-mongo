import mongoose from "mongoose";
import config from "config";

async function connectDatabase() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDatabase;
