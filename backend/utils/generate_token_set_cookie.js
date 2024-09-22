import jwt from 'jsonwebtoken';
import { get_future_time } from './get_future_time.js';

export const generate_token_set_cookie = ({ res, user_id }) => {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: get_future_time(7) - Date.now(), // 7 days in milliseconds
    secure: process.env.NODE_ENV === 'production'
  });

  return token;
};
