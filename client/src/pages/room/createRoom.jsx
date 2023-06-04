import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

const CreateRoom = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name:"", roomID:""
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails({
            ...details,
            [name]: value
        })
    } 

    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const {name, roomID} = details
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/create/room`, {
                name: name,
                roomID: roomID, 
            })
            const {data, status} = res
            console.log(res);
            console.log(data.user);
            if(status===200){
                navigate("/")
            }
            else{
                console.log("error");
            }
        }
    catch(e){
        console.log(e);
    }
}
    return (
        <Box sx={{
            backgroundColor:""
        }}>

            <Typography variant="h1">Whispers</Typography>
           {/* <form onSubmit={handleSubmit}>
                <h1>hey !name if rooom </h1>
                <input className="btn" name="name" value={details.name} onChange={handleChange} placeholder="Name"/>
                <h2>enter room id ?</h2>
                <input className="btn" name="roomID" value={details.roomID} onChange={handleChange} placeholder="room ID"/>
                <h2>Are you ready to create your account?</h2>
                <button  className="btn" type="submit"  />
            </form> */}
            <img src="/createRoom.gif" alt="" />
            <Box sx={{
                backgroundImage:`url(${"/stripe1.png"})`,
                height:"100vh"
            }}>
                
            </Box>
        </Box>
    )
}

export default CreateRoom