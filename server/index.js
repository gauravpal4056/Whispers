import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from  "dotenv";
import passport from "passport";
import cookieSession from "cookie-session";
import auth from "./routes/auth.js"
import * as passportSetup from "./passport.js"
const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({extended: false}));  
app.use(
    cookieSession({
        name: "session",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY],

    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "http://localhost:5173",
        method:"GET,POST, PUT,DELETE ",
        credentials: true,
    })
)



app.use('/auth', auth)



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("listening on port " + port);
})