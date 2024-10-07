import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // from (req.body)
app.use("/api/auth",authRoutes);


app.listen(PORT, ()=> {
  console.log(`Server is running on ${PORT}`);
  connectToMongoDb();
  console.log("Connected to MongoDB")
})