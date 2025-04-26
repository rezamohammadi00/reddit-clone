import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  githubId: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    githubId: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

export function getUserModel() {
  return mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
}
