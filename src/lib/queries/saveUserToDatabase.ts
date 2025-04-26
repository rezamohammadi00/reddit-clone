import { connectToDatabase } from "@/lib/mongodb";
import { getUserModel } from "@/models/User";

const saveUserToDatabase = async function saveUserToDatabase({
  name,
  email,
  image,
  githubId,
}: {
  name: string;
  email: string;
  image: string;
  githubId: string;
}) {
  try {
    await connectToDatabase(); // Ensure DB connection
    const User = getUserModel(); // Get model after connection
    const user = await User.findOneAndUpdate(
      { githubId }, // Find by githubId
      {
        name,
        email,
        image,
        githubId,
      },
      {
        upsert: true, // Create if not exists, update if exists
        new: true, // Return the updated document
        setDefaultsOnInsert: true, // Apply schema defaults on insert
      }
    );

    return user;
  } catch (error) {
    console.log("Failed to save user:", error);
    throw new Error("Failed to save user.");
  }
};

export default saveUserToDatabase;
