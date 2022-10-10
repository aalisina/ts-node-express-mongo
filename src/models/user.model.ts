import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { string } from "zod";

// In the mongoose documentation it is recommended not to extend mongoose.Document
// Many ways to integrate mongoose with TS, e.g. typegoose
export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // gives createdAt and updatedAt automatically
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
