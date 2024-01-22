import mongoose from "mongoose";

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new mongoose.Schema<User>({
  name: {
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
    required: true,
  },
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
