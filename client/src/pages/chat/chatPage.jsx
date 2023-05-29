import Chat from "../../components/chat/chat"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const ChatPage = () => {
    
    return (
        <Box sx={{height:"80vh", overflow:"hidden",}}>
            <Typography variant="h3" sx={{mb:1}}>Chat</Typography>
            <Box sx={{height:"100%", bgcolor:"white", borderRadius:"25px"}}>
                <Box sx={{height:"86vh",    }}>
                    <Chat />
                </Box>
            </Box>
        </Box>
    )
}

export default ChatPage