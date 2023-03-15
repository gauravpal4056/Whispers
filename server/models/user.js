import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    room: String,
    googleId: String,
    profilePicture: String,
    friends: [String],
})
const User = mongoose.model('User', userSchema)

export default User