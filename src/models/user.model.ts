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

// Add a presave hook to the userSchema
userSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  // When user's pwd is not being modified return next
  if (!user.isModified("password")) {
    return next();
  }
  // When the pwd is being modified
  // Create a salt
  const salt = await bcrypt.genSalt();
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
