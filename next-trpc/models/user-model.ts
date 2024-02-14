import mongoose from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  username: string;
}

export interface MongoUser extends User, mongoose.Document {}

export type TUser = User & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
