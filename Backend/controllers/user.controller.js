import User from "../models/user.model.js";

export const getSideBarUsers= async(req,res)=>{

  try {

    const loggedInUser = req.user._id;
    const allUsers = await User.find({_id:{ $ne: loggedInUser }}).select("-password");
    res.status(200).json({allUsers})
  } 
  
  catch (error) {
    res.staus(500).json({error:"Internal server error"})
  }
}