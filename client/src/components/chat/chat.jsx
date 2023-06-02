import { Avatar, Box, Button, Typography, Paper } from "@mui/material"
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
    const uid = useSelector(state => state.auth.googleId)
    const[chats, setChats] = useState([])
    const [receiver, setReceiver] = useState({})
    const getChats = async() => {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/getChats/${whisper._id}`
        try {
            const res = await axios.get(url)
            setChats(res.data.chats)
            console.log(res.data.chats);
        } catch (error) {
            console.log(error);
        }
    }
    const getUser = async () => {
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/getUser/${whisper.receiverId}`
            const {data} = await axios.get(url);
            const res = data.user;
            setReceiver(res)
        }catch (error) {
            console.log(error)  
        }
    }

    useEffect(() => {
        getChats()
        getUser()
        console.log(chats);
    },[whisper ])

    const userId = useSelector(state => state.auth.user.googleId)


    const handleOnEnter = async () => {
        console.log(userId);
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/createChat`
        try {
            const res = await axios.post(url, {
                senderId:userId,
                receiverId:whisper.receiverId,
                content:text,
                whisperId:whisper._id
            })
            setChats([...chats, {content:text, sender:userId}])
            setText("")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Paper elevation={3} sx={{width:"100%",height:"100%", position:"relative", borderRadius:"25px 25px 0 0",p:1 }}>
                {whisper ? 
                    <>
                        <Box sx={{ display:"flex",m:1, alignItems:"center", gap:1 ,}}>
                        <ArrowBackIosIcon sx={{display:{md:"none"}}} />
                        {/* <AvatarImg base={whisper.avatar} /> */}
                        <Avatar />
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            {whisper.senderId===userId ?
                                <Typography variant="h6">{receiver.name}</Typography>
                                :
                                <Typography variant="h6">{whisper.avatarName}</Typography>
                            }
                            <Typography variant="p">Offline</Typography>
                        </Box>
                        </Box>
                            <Box sx={{  height:"75%", overflowY:"scroll",   }}>
                                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
                                    {chats.length !==0 ? 
                                        <>{chats.map((chat) => {
                                            if(chat.sender !== uid)
                                                return (
                                                    <ReceiverChatBubble key={chat._id} chat={chat.content} />
                                                )
                                            else return (
                                                <SenderChatBubble key={chat._id} chat={chat.content} />
                                            )
                                    })}</> :
                                    <SenderChatBubble content={"hey"} />}
                                </Box>
                            </Box>
                        <Box sx={{ width:"100%", display:"flex", flexDirection:"row",justifyContent:"space-between",  borderRadius:"25px" }}>
                            <InputEmoji
                                value={text}
                                onChange={setText}
                                cleanOnEnter
                                onEnter={handleOnEnter}
                                placeholder="Type a message"
                                />
                                {/* <Button sx={{bgcolor:"black", borderRadius:"15px" ,fontSize:"15 px",width:'20px'}} onClick={handleOnEnter} >Send</Button> */}
                        </Box>
                    </> 
                    : 
                    <>

                    </>
                }
            </Paper>
            </>
    )
}

export default Chat