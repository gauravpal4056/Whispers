import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from  "dotenv";
import mongoose from "mongoose"
import auth from "./routes/auth.js"
import profile from "./routes/profile.js"
import createRoom from "./routes/createRoom.js"
import user from "./routes/user.js"
import whispers from "./routes/whispers.js"

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(
    cors({
        origin: "http://localhost:5173",
        method:"GET,POST,PUT,DELETE ",
        credentials: true,
    })
)

//routes
app.use('/auth', auth)
app.use('/profile', profile)
app.use('/create', createRoom)
app.use('/user', user)
app.use('/whispers', whispers)

//data base and local host
const PORT = process.env.PORT || 3000

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    })
}).catch(err => console.log(err));
