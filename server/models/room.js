import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
    name: String,
    roomID: String,
    members: Number,
    participants: [Object]

})
const Room = mongoose.model('Room', roomSchema)

export default Room