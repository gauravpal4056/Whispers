import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from "react-redux";
import AvatarImg from "../avatar/avatar";
import axios from "axios";
import ReceiverChatBubble from "../chatBubble/receiverChatBubble";
import SenderChatBubble from "../chatBubble/senderChatBubble";
import { setChats } from "../../store/authSlice";

const Chat = () => {
    const [text, setText]  = useState("")
    const dispatch = useDispatch()
    const whisper = useSelector(state => state.whisper.selectedWhispers)
    const chats = useSelector((state) => state.auth.chats)
    const getChats = async() => {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/getChats/${whisper._id}`
        try {
            const res = await axios.get(url)
            dispatch(setChats(res.data.chats))
            console.log(chats);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getChats()
        console.log(chats);
    },[])

    const userId = useSelector(state => state.auth.user.googleId)


    const handleOnEnter = async () => {
        console.log(userId);
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/createChat`
        try {
            const res = await axios.post(url, {
                senderId:userId,
                content:text,
                whisperId:whisper._id
            })
            chats.push(res.data)
            console.log(chats);
            setText("")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Box sx={{width:"100%",height:"100%", position:"relative", overflow:"hidden", borderRadius:"25px 25px 0 0", }}>
                <Box sx={{width:"100%", display:"flex",color:"black",m:1, alignItems:"center", gap:1 ,}}>
                    <ArrowBackIosIcon sx={{display:{md:"none"}}} />
                    <AvatarImg base={whisper.avatar} />
                    <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Typography variant="h6">{whisper.avatarName}</Typography>
                        <Typography variant="p">Offline</Typography>
                    </Box>
                </Box>
                <Box sx={{height:"100%",  width:"100%", mb:"13vh",}}>
                    <Box sx={{  height:"65%", overflow:"hidden", overflowY:"scroll",   }}>
                        {chats.map((chat) => {
                            <SenderChatBubble content={"hey"} />
                        })}
                        <ReceiverChatBubble content={"hey i am u=your bf"} />
                        <SenderChatBubble content={"i dont know i am"} />
                        <SenderChatBubble content={"jkdfjsdfjsldfjdsf dfsdfjlksjdfjds sdfslkdfjjsdlkfj sdflksdfjslkdfmlsdflkdf ldkflsdfsdf lasjddflsdlfk " } />
                    </Box>
                </Box>
                <Box sx={{position:"absolute", bottom:"13vh", width:"100%", display:"flex", flexDirection:"row",justifyContent:"space-between",  borderRadius:"25px" }}>
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                        />
                        {/* <Button sx={{bgcolor:"black", borderRadius:"15px" ,fontSize:"15 px",width:'20px'}} onClick={handleOnEnter} >Send</Button> */}
                </Box>

            </Box>
            </>
    )
}

export default Chat