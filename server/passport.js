import passport from "passport"
import passportGoogle from 'passport-google-oauth20'
import dotenv from "dotenv"
dotenv.config()
const GoogleStrategy = passportGoogle.Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: [ 'profile' ]
    },
    function(accessToken, refreshToken, profile, cb) {
        cb(null, profile)
    }
));

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})