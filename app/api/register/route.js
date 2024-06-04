import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
  const body = await req.json();

  // Ensure connection is established before creating user
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const createdUser = await User.create(body);
    return Response.json(createdUser);
  } catch (error) {
    // Handle connection or validation errors appropriately
    console.error(error);
    return Response.json({ error: error.message }, { status: 400 }); // Bad Request
  } finally {
    // Close connection (optional, might be handled by Mongoose)
    await mongoose.disconnect();
  }
}
