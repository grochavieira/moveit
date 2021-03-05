import { NowRequest, NowResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/database";

export default async (request: NowRequest, response: NowResponse) => {
  const { name, image, userId } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection("users");

  await collection.insertOne({
    userId,
    name,
    image,
    completedChallenges: 0,
    level: 1,
    currentExperience: 0,
    totalExperience: 0,
    registeredAt: new Date(),
  });

  return response.status(201).json({ ok: true });
};
