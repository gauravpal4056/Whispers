import Chat from "../models/chat.js";

export const getChats = async (req, res) => {
    const {whispersId } = req.params
    console.log(whispersId);
    try {
        const chats = await Chat.find({ whispersId})
        res.status(200).json({ error: false, message: "chat Found", chats:chats})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "error finding chat", error:error})
    }
}

export const createChat = async (req, res) => {
    const {senderId,receiverId, whisperId, content} = req.body
    try {
        const newChat = new Chat({
            whispersId:whisperId,
            sender:senderId,
            receiver: receiverId,
            content
        })
        const chat = await newChat.save();
        res.status(200).json(chat)
    } catch (error) {
        res.status(404).json(error)
        console.log(error);
    }
}