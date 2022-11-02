import { DocumentDefinition, FilterQuery } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUserService(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  const user = await UserModel.findOne(query).lean();
  return user;
}
