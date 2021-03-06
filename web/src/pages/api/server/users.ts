import { NowRequest, NowResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/database";

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const users = await db.collection("users").find({}).toArray();
  return response.status(201).json(users);
};
