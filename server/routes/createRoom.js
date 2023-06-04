import express from "express";
import createRoom from "../controller/createRoom.js";
import check from "../controller/checkRoom.js";
const router = express.Router()

router.post('/room', createRoom)
router.get('/findRoom/:roomID', check)

export default router