import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 100,
    },
    city: String,
    state: String,
    country: String,
    phoneNumer: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true } //auto create and update a date
);

const User = mongoose.model("User", userSchema);
export default User;
