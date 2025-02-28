import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    otp: {type: String},
    sendTime: {type: Number},
    token: { type: String }
  }
}, {timestamps: true})

export default mongoose.model("User", UserSchema)

