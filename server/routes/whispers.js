import express from "express";

import { sendWhispers, getReceivedWhispers, getSentWhispers, deleteWhispers, likeWhispers } from "../controller/whispers.js";
const router = express.Router()

router.get('/getSentWhispers/:googleId', getSentWhispers)

router.get('/getReceivedWhispers/:googleId', getReceivedWhispers)

router.post('/sendWhispers', sendWhispers)

router.post('/likeWhisper', likeWhispers)

router.get('/deleteWhispers/:whisperId', deleteWhispers)

export default router