import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from  "dotenv";
import passport from "passport";
import cookieSession from "cookie-session";
import mongoose from "mongoose"
import auth from "./routes/auth.js"
import profile from "./routes/profile.js"
import * as passportSetup from "./passport.js"

const app = express();

dotenv.config();
 
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
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
app.use('/profile', profile)


const PORT = process.env.PORT
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    })
}).catch(err => console.log(err));
