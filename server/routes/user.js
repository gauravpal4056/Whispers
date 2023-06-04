import express from "express";
import { createChat, getChats } from "../controller/chat.js";
import {getAllUsers, getUser} from "../controller/user.js"

const router = express.Router()

router.get('/getUser/:googleId', getUser)
router.get('/getChats/:whispersId', getChats)
router.post('/createChat',  createChat)
router.get('/getAllUsers/:roomId', getAllUsers)

export default router