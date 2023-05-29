import User from "../models/user.js";
import Whispers from "../models/whispers.js";

export const getSentWhispers = async (req, res) => {
    const googleId = req.params.googleId;
    try {
        const whispers = await Whispers.find({ senderId:googleId})
        res.status(200).json({ error: false, message: "wispers Found", whispers:whispers})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "something went wrong"})
    }
}

export const getReceivedWhispers = async (req, res) => {
    const googleId = req.params.googleId;
    try {
        const whispers = await Whispers.find({ receiverId:googleId})
        res.status(200).json({ error: false, message: "wispers Found", whispers:whispers})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "something went wrong"})
    }
}

export const sendWhispers = async (req, res) => {
    const {senderId, receiverId, content, background, avatar, avatarName} = req.body
    try {
        const newWhisper = new Whispers({
            senderId,
            receiverId,
            content,
            avatar,
            background,
            isLiked:false,
            avatarName
        })
        await newWhisper.save();
        const sender = await User.findOne({googleId: senderId})
        sender.sent = sender.sent+1
        const receiver = await User.findOne({googleId: receiverId})
        receiver.received = receiver.received+1
        receiver.save()
        sender.save()
        res.status(200).json({ error: false, message: "Successfully created whisper",})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error creating user"})
    }
}

export const likeWhispers = async (req, res) => {
    const {whispersId, senderId, receiverId} = req.body
    try {
        const sender = await User.findOne({googleId:senderId})
        const receiver = await User.findOne({googleId:receiverId})
        const whispers = await Whispers.findOne({whispersId})
        whispers.isLiked = true;
        whispers.save()
        sender.likes = sender.likes+1
        receiver.likedWhispers.push(whispersId)
        sender.save()
        receiver.save()
        res.status(200).json({error: false, })
    } catch (error) {
        res.status(400).json({error: error, message:"error while liking whispers"})
    }
}

export const deleteWhispers = async (req, res) => {
    const {whispersId} = req.params
    await Whispers.deleteOne({whispersId})
    res.status(200).json({message:"successfully deleted whispers"})
}