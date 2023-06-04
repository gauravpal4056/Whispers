import Chat from "../../components/chat/chat"
import { Typography, Paper } from "@mui/material"
import { Box } from "@mui/system"

const ChatPage = () => {
    
    return (
        <Paper sx={{height:"91vh", overflow:"hidden", borderRadius:"25px 25px 0 0",}}>
            <Typography variant="h3" sx={{m:1, fontWeight:"bold", textAlign:"left"}}>Chat</Typography>
                <Box sx={{height:"70vh",    }}>
                    <Chat />
                </Box>
        </Paper>
    )
}

export default ChatPage