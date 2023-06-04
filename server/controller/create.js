import User from "../models/user.js";
const create = async (req, res) => {
    console.log("create User hit    ");
    const {googleId, name, roomId, gender, profileBase, likes, hates, received, sent} = req.body;
    try {
        const newUser = new User({
            googleId,
            name,
            roomId,
            gender,
            profileBase,
            hates,
            likes,
            received,
            sent

        })
        const savedUser = await newUser.save();
        res.status(200).json({ error: false, message: "Successfully created User", user: savedUser})
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error creating user"})
    }
}

export default create;