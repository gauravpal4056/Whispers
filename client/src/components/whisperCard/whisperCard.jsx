import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Typography, Box, Avatar, List , Button, Drawer, ListItem, Divider  } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import "./WhisperCard.css"
import { useNavigate } from "react-router-dom";
import AvatarImg from "../avatar/avatar";
import { useDispatch } from "react-redux";
import { setSelectedWhispers } from "../../store/whisperSlice";
import axios from "axios"

const WhisperCard= (props) => {
    const dispatch = useDispatch()
    const [isLiked, setLiked] = useState(props.whisper.isLiked)
    const [isDeleted, setDeleted] = useState(false)
    const navigate = useNavigate()
    const sent = props.sent
    var date =  new Date(props.whisper.createdAt)
    const openChat = () => {
        dispatch(setSelectedWhispers(props.whisper))
        navigate("chat")
    }

    const likeWhisper = async () => {
        if(!props.whisper.isLiked){
            setLiked(true)
            try {
                const url = `${import.meta.env.VITE_REACT_APP_API_URL}/whispers/likeWhisper/`
                const res = await axios.post(url,{
                    senderId:props.whisper.senderId,
                    receiverId: props.whisper.receiverId,
                    whisperId: props.whisper._id
                })
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const deleteCard = async () => {
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/whispers/deleteWhispers/${props.whisper._id}`
            const res = await axios.get(url)
            console.log(res);
            setDeleted(true)
        } catch (error) {
            console.log(error);
        }
        props.changeToggle(!props.toggle);
        console.log(props.toggle);
        console.log(props.toggle);

    }
    return (
        <>
            {!isDeleted && <Box sx={{ height:"100%",}}>
                <Box sx={{display:"flex",flexDirection:"column", backgroundImage:`url("${props.whisper.background}")`, backgroundPosition:"center", backgroundSize:"cover", height:"100%", borderRadius:"25px" }}>
                    <Box sx={{p:2,display:"flex",gap:2, justifyContent:"space-between",alignItems:"center",borderRadius:"25px 25px 0 0", }}>
                        <Typography sx={{}}>{date.toDateString()}</Typography>
                        <Box sx={{display:"flex", }}>
                            {isLiked ||!sent ? <FavoriteIcon onClick={likeWhisper} sx={{color:isLiked ? "red" : "white"}} /> :<></>}
                            <DeleteOutlineRoundedIcon onClick={deleteCard}  />
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", m:3,flexDirection:"column", alignItems:"center",justifyContent:"flex-end",height:"100%" ,gap:3  }}>
                        <Box sx={{bgcolor:"rgba(0,0,0,0.5)",borderRadius:"25px", p:2, display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column" }}>
                            <Typography variant="h5" sx={{color:"white"}}>{props.whisper.avatarName}</Typography>
                            <Box sx={{height:86, width:86}}><AvatarImg userPic={true} base={props.whisper.avatar} /></Box>
                            <Typography sx={{mt:1}} variant="p"  >{props.whisper.content}</Typography>
                        </Box>
                        <Button sx={{bgcolor:"white", borderRadius:"15px", fontSize:"15px"}} onClick={openChat} >reply</Button>
                    </Box>
                </Box>
            </Box>}
        </>
    )
} 

export default  WhisperCard