import mongoose from "mongoose"

const whispersSchema = new mongoose.Schema({
    senderId: String,   
    receiverId: String,
    content:String,
    chatId:String,
    background:String,
    avatar:Object,
    isLiked:Boolean,
    avatarName:String
},
{
    timestamps: true,
})
const Whispers = mongoose.model('Whisper', whispersSchema)

export default Whispers