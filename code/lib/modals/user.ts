import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    name: { type: "string", required: true }
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
