import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"

dotenv.config()

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mail_trap_client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Big Temi",
};