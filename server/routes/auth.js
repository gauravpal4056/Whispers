import express from "express"
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()
import User from "../models/user.js"

router.get('/login/fail', (req,res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure from fail route"
    })
})

router.get('/login/success', async (req,res) => {
    if(req.user){
        try {
            const existedUser = await User.findOne({googleId:req.user.id})
            if(existedUser){   
                console.log("existedUser"); 
                res.status(201).json({
                    error: false,
                    message: "Log in successfully exissted user found",
                    exist: true,
                    user: existedUser
                })
            }
            else{
                res.status(200).json({
                    error: false,
                    exists:false,
                    message: "Log in successfully create a profile ",
                    user: req.user
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: true, message: "dataBase error finding user"})
        }
    }
    else{
        res.status(401).json({ error: true, message: "Log in failure from success route"})
    }
})



router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect:process.env.CLIENT_URL,
        failureRedirect: '/login/fail' }),
    
);

router.get('/google/logout', (req,res) => {
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

export default router