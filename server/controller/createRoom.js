import Room from "../models/room.js";
const create = async (req, res) => {
    const { name, roomID} = req.body;

    try {
        const existedRoom = await Room.findOne({ roomId: roomID})
        console.log(existedRoom);
        if(existedRoom)
            res.status(400).json({ error: true, message: "already exists"})
        else{
            const newRoom = new Room({
                name,
                roomID
            })
        await newRoom.save();
            res.status(200).json({ error: true, message: "created Room"})
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error creating room"})
    }
}

export default create;