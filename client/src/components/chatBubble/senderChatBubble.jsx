import { Box, Typography } from "@mui/material"

const SenderChatBubble =  (props) => {
    return(
        <Box sx={{display:"flex", justifyContent:"flex-start"}}>
            <Box sx={{maxWidth:'40%', right:0, color:"black", bgcolor:'#eeeeee', borderRadius:"15px", p:2, m:1 }}>
                <Typography sx={{fontSize:"20px"}}>{props.content}</Typography>
            </Box>
        </Box>
    )
}
 
export default SenderChatBubble