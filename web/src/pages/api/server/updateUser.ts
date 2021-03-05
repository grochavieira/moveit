import { NowRequest, NowResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/database";

export default async (request: NowRequest, response: NowResponse) => {
  const {
    level,
    currentExperience,
    totalExperience,
    challengesCompleted,
    userId,
  } = request.body;

  console.log(request.body);

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const user = await db.collection("users").updateOne(
    { userId },
    {
      $set: { level, currentExperience, totalExperience, challengesCompleted },
    }
  );
  console.log({ user });
  return response.status(201).json(user);
};
