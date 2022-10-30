import mongoose from "mongoose";
import { UserDocument } from "./user.model";

// In the mongoose documentation it is recommended not to extend mongoose.Document
// Many ways to integrate mongoose with TS, e.g. typegoose
export interface SchemaDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    userAgent: {
      type: String,
    },
  },
  {
    // gives createdAt and updatedAt automatically
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;
