import User from "../models/user.js";

export const getUser = async (req, res) => {
    const googleId = req.params.googleId;
    try {
        const user = await User.findOne({ googleId:googleId})
        res.status(200).json({ error: false, message: "user Found", user:user})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error finding user"})
    }
}

export const getAllUsers = async (req, res) => {
    const {roomId} = req.params   
    try {
        const users = await User.find({roomId})
        res.status(200).json({message:"usersFound", users:users})
    } catch (error) {
        res.status(400).json({message:"error while searching users", error:error})
    }
}