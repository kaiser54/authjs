import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './db/connectdb.js'

import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world 123")
})

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
  connectDB()
  console.log("server is running at port 8000")
});
