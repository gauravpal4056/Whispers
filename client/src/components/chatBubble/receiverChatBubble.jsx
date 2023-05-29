import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const ReceiverChatBubble =  (props) => {
    return(
        <Box sx={{display:"flex", justifyContent:"flex-end"}}>
            <Box sx={{maxWidth:'40%', right:0, color:"black", bgcolor:'#ace941', borderRadius:"15px", p:2,m:1  }}>
                <Typography sx={{fontSize:"20px"}}>{props.content}</Typography>
            </Box>
        </Box>
    )
}

export default ReceiverChatBubble