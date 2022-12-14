import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvxyz0123456789");

export interface ProductDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoid()}`,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    // gives createdAt and updatedAt automatically
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
