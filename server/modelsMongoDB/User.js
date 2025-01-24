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
    phoneNumber: String, // Corrected typo from phoneNumer to phoneNumber
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true } // Automatically create and update timestamps
);

const User = mongoose.model("User", userSchema);
export default User;
