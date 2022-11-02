import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, {
  SchemaDocument as SessionDocument,
} from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({
    user: userId,
    userAgent,
  });
  return session.toJSON();
}
export async function findSessions(query: FilterQuery<SessionDocument>) {
  // .lean() means that it's not going to return all the functions
  // it will return the plain object, same as toJson
  return SessionModel.find(query).lean();
}
export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update);
}
