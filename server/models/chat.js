import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    whispersId: String,
    sender: String,
    receiver: String,
    content: String,
},
{
    timestamps:true
}
)
const Chat = mongoose.model('Chat', chatSchema)

export default Chat