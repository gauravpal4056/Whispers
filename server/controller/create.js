import User from "../models/user.js";
const create = async (req, res) => {
    const {googleId, name, roomId, gender, profilePic} = req.body;
    try {
        const newUser = new User({
            googleId,
            name,
            roomId,
            gender,
            profilePicture: profilePic
        })
        const savedUser = await newUser.save();
        console.log(googleId);
        console.log(savedUser);
        res.status(200).json({ error: false, message: "Successfully created User", user: savedUser})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error creating user"})
    }
}

export default create;