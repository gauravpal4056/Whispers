import express from "express"
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()

router.get('/login/fail', (req,res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure from fail route"
    })
})

router.get('/login/success', (req,res) => {
    if(req.user){
        console.log( req.user);
        //User.find(googleId: req.user.id)//
        //if user is found then return user 
        //else redirect to create a new user
        res.status(200).json({
            error: false,
            message: "Log in successfully ",
            user: req.user
        })
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