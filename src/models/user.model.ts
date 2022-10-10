import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { string } from "zod";

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
