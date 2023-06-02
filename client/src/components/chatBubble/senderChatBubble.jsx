import { Box, Typography } from "@mui/material"

const SenderChatBubble =  (props) => {
    return(
        <Box sx={{display:"flex", justifyContent:"flex-start"}}>
            <Box sx={{maxWidth:'80%', right:0, color:"black", bgcolor:'#eeeeee', borderRadius:"15px 15px 15px 0", p:1, m:1 }}>
                <Typography variant="body2" sx={{textAlign:"left"}}>{props.chat}</Typography>
            </Box>
        </Box>
    )
}
 
export default SenderChatBubble