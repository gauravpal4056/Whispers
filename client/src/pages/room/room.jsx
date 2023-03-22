import { Box,Button, TextField, Paper, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { setRoomID } from "../../store/authSlice"
import { setRoutedPage } from "../../store/profileSlice"
import axios from "axios";

const Room = () => {

    const navigate = useNavigate()
    const [details, setDetails] = useState("")
    const [validRoom, setValidRoom] = useState("")
    const [roomName, setRoomName] = useState("")
    const dispatch = useDispatch()

    const handleClick = async () => {
        if(validRoom==="found"){
            dispatch(setRoomID(details))
            navigate('/profile')
        }else{
            try{
                const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/create/findRoom/${details}`)
                console.log(res.data);
                if(res.status === 200){
                    setValidRoom("found")
                    setRoomName(res.data.room.name)
                }
                else{
                    setValidRoom("error")
                }
            }catch(e){
                console.log(e);
                setValidRoom("error")
            }
        }
    }
    const handleChange = (e) => {
        const value = e.target.value;  
        setDetails(value)
    } 



    return (
        <>
            <div>
                <h1>Where are all your Friends?</h1>
                <Box
                    sx={{
                        width: "100%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        
                    }}
                    >
                        {validRoom==="found" ? 
                        <Box sx={{display:"flex", flexDirection:"column",}}>
                            <Typography>Hurray! Room found. Looks like you do have friends</Typography>
                            <Typography variant="h2">{roomName}: {details}</Typography>
                            <img style={{ height: "40vh",  }} src="/roomFound.gif" />
                        </Box> :
                        validRoom==="error"? 
                        <Box>
                            <Typography variant="h6">Life is good with friends. Search for that place </Typography>
                            <Typography sx={{fontSize:"18px"}} > or create a new <Button variant="outlined"><Link to='/createRoom' >Place</Link></Button></Typography> 
                            <img style={{ height: "50vh",  }} src="/error.png" />
                            <Typography sx={{marginBottom:"20px"}}>Oops!  kuch to gadbad h</Typography>

                        </Box> : 
                        <Box>
                            <Typography variant="h6">Life is good with friends. Search for that place </Typography>
                            <Typography sx={{fontSize:"18px"}} > or create a new <Button  variant="outlined">Place</Button></Typography> 
                            <img style={{ height: "50vh",  }} src="/room.gif" />
                        </Box>}
                    </Box>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <TextField type={"number"} id="outlined-basic" label="RoomID" value={details} onChange={handleChange} variant="outlined" />
                    {validRoom==="found" ? <Button onClick={handleClick} variant="contained">Enter</Button> :    <Button onClick={handleClick} variant="outlined">Find</Button>}
                </Box>
            </div>
        </>
    )
}

export default Room