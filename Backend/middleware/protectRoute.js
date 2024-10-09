import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req,res,next)=>{
  try {
    const token = req.cookies.jwt;

    if(!token){
      return res.status(401).json({error:"Unauthorized - no token was found"})
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if(!decoded){
      return res.status(401).json({error:"Unauthorized - invalid token"})
    }

    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
      return res.status(401).json({error:"Unauthorized - user not found"})
    }

    req.user = user

    next();
  } 
  
  catch (error) {
    res.status(500).json({error:error.message})
  }
};

export default protectRoute;