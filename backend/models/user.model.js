import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  last_login_date: {
    type: Date,
    default: Date.now
  },
  is_verified: {
    type: Boolean,
    default: false
  },
  reset_password_token: String,
  reset_password_expires_at: Date,
  verification_token: String,
  verification_token_expires_at: Date,
}, { timestamps: true })

// the '{ timestamps: true }' allows mongoose to add the createdAt and updatedAt automatically to the document

export const User = mongoose.model('User', userSchema)