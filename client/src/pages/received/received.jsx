import { Typography, Box, Avatar, List , Button, Drawer, ListItem, Divider, Stack  } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";   
import { useDispatch, useSelector } from "react-redux";
import Chat from "../../components/chat/chat";
import WhisperCarousel from "../../components/whisperCarousel/whisperCarousel";
import { setInbox } from "../../store/authSlice";



const Sent = () => {
    const userId = useSelector(state => state.auth.user.googleId )
    const dispatch = useDispatch()
    const selectedUser = useSelector(state => state.whisper.selectedUser)

    const getReceivedWhispers = async () => {
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/whispers/getReceivedWhispers/${userId}`
            const res = await axios.get(url)
            console.log(res);
            dispatch(setInbox(res.data.whispers))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getReceivedWhispers()
    }, [])

    return (
        <>
            <Box sx={{bgcolor:"black", height:"93vh", overflow:"hidden"}}>
                <Typography variant="h3" >Received</Typography>
                <Box sx={{height:"100%", bgcolor:"#f7f6f0",borderRadius:"25px  25px 0 0", width:"100%", display:"flex", flexDirection:"row",justifyContent: 'space-evenly',}}>
                <Box  
                    sx={{
                        width:"25%",
                        display:{xs:"none", md:"flex"},
                        flexDirection: 'column',
                        borderRadius:"25px",
                        zIndex:1000,
                        pb:5,
                    }}
                > 
                    <Typography variant="h4" sx={{m:2, color:"black",textAlign:"left"}} >Chat</Typography>
                    {selectedUser && <Chat />}
                </Box>
                <Divider orientation="vertical"  />
                <Box sx={{ 
                        display:{xs:"flex", md:"flex"}, 
                        flexDirection: 'column',
                        gap:1,
                        width:{xs:"100%", md:"40%"},
                        borderRadius:"25px 25px 0 0",
                        }}
                    >
                    <Box sx={{borderRadius:"25px",   display:"flex",}}>
                        <WhisperCarousel sent={false}  />
                    </Box>
                    {/* <Box sx={{width:"90%", height:"10vh", bgcolor:"black",borderRadius:"25px", m:2 }}></Box> */}
                </Box>
                <Divider orientation="vertical"  />
                <Box sx={{width:"25%", display:{xs:"none", md:"block"},}}>
                <Typography variant="h4" sx={{ textAlign:"left", color:"black"}} >Recent</Typography>
                    <Box sx={{ height:"100%", bgcolor:"grey", m:1}}>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Sent