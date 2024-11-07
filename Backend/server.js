import path from "path"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDb from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // from (req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*",(req,res) =>{
  res.sendFile(path.join(__dirname,"Frontend" ,"dist","index.html"));
})

connectToMongoDb();
server.listen(PORT, ()=> {
  console.log(`Server is running on ${PORT}`);
 
  console.log("Connected to MongoDB")
})