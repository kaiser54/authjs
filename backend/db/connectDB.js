import mongoose from "mongoose";

export const connectDB = async (params) => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${res.connection.host}`)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message)
    // throw error;
    process.exit(1) // 1 is failure, 0 status code is success
  }
}