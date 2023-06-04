import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const ReceiverChatBubble =  (props) => {
    return(
        <Box sx={{display:"flex", justifyContent:"flex-end"}}>
            <Box sx={{maxWidth:'80%', right:0, color:"black", bgcolor:'#ace941', borderRadius:"15px 15px 0 15px",p:1,m:1  }}>
                <Typography sx={{textAlign:"left"}} variant="body2">{props.chat}</Typography>
            </Box>
        </Box>
    )
}

export default ReceiverChatBubble