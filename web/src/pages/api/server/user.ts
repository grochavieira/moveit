import { NowRequest, NowResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/database";

export default async (request: NowRequest, response: NowResponse) => {
  const { userId } = request.body;
  console.log({ userId });
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const user = await db.collection("users").findOne({ userId });
  console.log({ user });
  return response.status(201).json(user);
};
