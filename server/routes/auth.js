import express from "express"
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()

router.get('/login/fail', (req,res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure "
    })
})

router.get('/login/success', (req,res) => {
    if(req.user){
        res.status(200).json({
            error: false,
            message: "Log in successfully ",
            user: req.user
        })
    }
    else{
        res.status(401).json({ error: true, message: "Log in failure "})
    }
})



router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
    passport.authenticate('google', {
        successRedirect:process.env.CLIENT_URL,
        failureRedirect: '/login/fail' }),
    
);

router.get('/logout', (req,res) => {
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

export default router