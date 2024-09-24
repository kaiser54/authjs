import bcrypt from 'bcryptjs';

import { User } from '../models/user.model.js';
import { get_future_time } from '../utils/get_future_time.js';
import { generate_verification_code } from '../utils/generate_verification_code.js';
import { generate_token_set_cookie } from '../utils/generate_token_set_cookie.js';

export const sign_up = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error('All fields are required');
    }

    const user_exists = await User.findOne({ email });

    if (user_exists) {
      // You can either throw an error or return a response
      // Here, returning a response is preferred
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    const hashed_password = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      password: hashed_password,
      name,
      verification_token: generate_verification_code(),
      verification_token_expires_at: get_future_time(24) // 24 hours in milliseconds
    });

    await user.save();

    // Set JWT cookie
    generate_token_set_cookie({ res, user_id: user._id });

    send_verification_email({ email: user.email, verification_token})

    // Remove the password field from the user object
    const user_data = user.toObject(); // Convert the Mongoose document to a plain object
    delete user_data.password; // Remove password field from the object

    // Send success response
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: user_data,
    });

  } catch (error) {
    // Handles all errors and sends a 400 response
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


export const sign_in = async (req, res) => {
  res.send('sign-in route')
}

export const sign_out = async (req, res) => {
  res.send('log-out route')
}
