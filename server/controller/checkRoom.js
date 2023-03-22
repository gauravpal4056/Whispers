import Room from "../models/room.js";
const check = async (req, res) => {
    const roomID = req.params.roomID;  ;
    try {
        const existedRoom = await Room.findOne({ roomID})
        if(existedRoom)
            res.status(200).json({ error: false, message: "Successfully found room", room: existedRoom})
        else res.status(400).json({ error: true, message: "not found", })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, message: "dataBase error creating room"})
    }
}

export default check;