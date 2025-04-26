import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  image: string;
  githubId: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    githubId: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

// Export a function to get the User model after connection
export function getUserModel() {
  return mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
}
