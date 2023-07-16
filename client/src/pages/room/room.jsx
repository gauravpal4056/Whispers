import { Box,Button, TextField, Paper, Typography, CardMedia } from "@mui/material"
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
        <Box sx={{height:"93vh", overflow:"hidden"}}>
                <Typography variant="h3">Friends</Typography>
                <Box
                    sx={{
                        width: "100%",
                        height:"100%",
                        display:"flex",
                        py:5,
                        alignItems:"center",
                        bgcolor:"#bb86ff",
                        borderRadius:"25px 25px 0 0" ,
                        flexDirection:"column",
                        textAlign:"left",
                    }}
                    >
                        {validRoom==="found" ? 
                        <Box>
                            <Typography sx={{color:"white",px:3}} variant="h4">Hurray! Looks Like you do have some friends </Typography>
                            <Typography sx={{color:"black",px:3, mt:3}} variant="h4">Room found "{roomName} : {details}"</Typography>
                            <CardMedia sx={{ minHeight: "45vh",width:"100%"  }} image="/bg1.png" />
                        </Box> :
                        validRoom==="error"? 
                        <Box>
                            <Typography sx={{color:"white",px:3}} variant="h4">Oops! Something went wrong. </Typography>
                            <Typography sx={{color:"white",px:3}} variant="h4">Please try again </Typography>
                            <CardMedia sx={{ minHeight: "45vh",width:"100%"  }} image="/bgError.png" />
                        </Box> : 
                        <Box>
                            <Typography sx={{color:"white",px:3}} variant="h4">Life is good with friends. Search for that place </Typography>
                            <Typography sx={{fontSize:"25px", px:3}} > or create a new <Button sx={{color:"white", borderRadius:"15px"}} variant="contained">Place</Button></Typography> 
                            <CardMedia sx={{ minHeight: "45vh",width:"100%"  }} image="/bg1.png" />
                        </Box>}
                        {validRoom!=="found" && <Typography sx={{pt:3, width:"290px"}} variant="p">Enter the Room ID shared by your friends. If new to Whispers create a new Room by clicking above</Typography>}
                        {validRoom==="found" ? 
                            <CardMedia onClick={handleClick} sx={{ height:"100px",width:"100px", borderRadius:"100%",   }} image="/logo/go1.png" />
                        : <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", gap:2, zIndex:99999,color:"white",p:3   }}>
                            <input value={details} onChange={handleChange} style={{fontSize:"25px",width:"8em", height:"6vh", borderRadius:"15px", color:"white", background:"rgba(255,255,255,0.2)", border:"none", marginLeft:"9px"    }} type="number" placeholder="Room Id" />
                            <Button sx={{  fontSize:"25px", height:"6vh", borderRadius:"15px", color:"white"  }} onClick={handleClick} variant="contained">Find</Button>
                        </Box>}
                    </Box>
        </Box>
    )   
}

export default Room