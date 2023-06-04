import { Typography, Box,Paper, Avatar, List , Button, Drawer, ListItem, Divider, Stack  } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";   
import { useDispatch, useSelector } from "react-redux";
import Chat from "../../components/chat/chat";
import WhisperCarousel from "../../components/whisperCarousel/whisperCarousel";
import { setInbox } from "../../store/authSlice";
import Notifications from "../../components/notifications/notifications";




const Received = () => {
    const userId = useSelector(state => state.auth.user.googleId )
    const dispatch = useDispatch()
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
            <Paper sx={{
                height:"91vh",  borderRadius:"25px 25px 0 0 ", pt:1, px:1,overflow:"hidden" 
                }}>
                <Box sx={{height:"100%",  width:"100%", display:"flex", flexDirection:"row",justifyContent: 'center', gap:4, }}>
                    <Box  
                        sx={{
                            width:"23%",
                            display:{xs:"none", md:"flex"},
                            flexDirection: 'column',
                            borderRadius:"25px",
                            zIndex:1000,
                            height:"80vh"
                        }}
                    >
                        <Chat />
                    </Box>
                    <Box sx={{ 
                            display:{xs:"flex", md:"flex"}, 
                            flexDirection: 'column',
                            gap:1,
                            width:{xs:"100%",md:"30%"},
                            borderRadius:"25px 25px 0 0",
                            }}
                        >
                        <Typography sx={{textAlign:{xs:"left", md:"center"}, fontWeight: 'bold',}} variant="h3">Received</Typography>
                        <Box sx={{borderRadius:"25px",   display:"flex", alignItems:"center"}}>
                            <WhisperCarousel sent={false}  />
                        </Box>
                        {/* <Box sx={{width:"90%", height:"10vh", bgcolor:"black",borderRadius:"25px", m:2 }}></Box> */}
                    </Box>
                    <Notifications />
                </Box>
            </Paper>
        </>
    )
}

export default Received