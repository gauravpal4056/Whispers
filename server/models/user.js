import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    room: String,
    googleId: String,
    profilePicture: String,
    gender:String,
    friends: [String],
    profileBase:Object,
    likes:Number,
    hates:Number,
    sent:Number,
    received:Number,
    likedWhispers:[String],
    roomId:String
})
const User = mongoose.model('User', userSchema)

export default User