import express from "express"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()
import User from "../models/user.js"

router.get('/checkUser/:uid', async (req, res) => {
    const uid = req.params.uid
    try {
        const existedUser = await User.findOne({googleId:uid})
        if(existedUser){   
            res.status(201).json({
                error: false,
                message: "Log in successfully exissted user found",
                exist: true,
                user: existedUser
            })
        }
        else{
            res.status(200).json({
                exist:false,
                message: "Log in successfully create a profile ",
                uid: uid
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error finding user"})
    }

} )

export default router