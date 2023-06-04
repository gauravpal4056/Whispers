import { Avatar, Paper, Typography, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';


const Notifications = () => {
    return (
        <>
            <Paper elevation={2} sx={{height:"70vh", width:"20%",p:3,  display:{xs:"none", md:"block"}}}>
                <Typography variant="h5" sx={{fontWeight:"bold", textAlign:"left", mb:3}}>Notifications</Typography>
                <Box sx={{display:"flex",width:"100%", gap:1, justifyContent:"space-between",mt:1 }}>
                    <Box sx={{display:"flex", gap:1}}>
                        <Avatar/>
                    
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center"}}>
                            <Typography sx={{fontWeight:"bold", lineHeight:1}} variant="body1">Gaurav Pal</Typography>
                            <Typography sx={{m:0}} variant="caption" >Liked a message</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <FavoriteIcon/>
                        <Typography variant="caption">12:30</Typography>
                    </Box>
                </Box>

                <Box sx={{display:"flex",width:"100%", gap:1, justifyContent:"space-between",mt:1 }}>
                    <Box sx={{display:"flex", gap:1}}>
                        <Avatar/>
                    
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center"}}>
                            <Typography sx={{fontWeight:"bold", lineHeight:1}} variant="body1">Piyush </Typography>
                            <Typography sx={{m:0}} variant="caption" >Replied: tu hota</Typography>
                        </Box>
                    </Box>
                    <Box sx={{width:"30px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <ReplyIcon/>
                        <Typography variant="caption">2:40</Typography>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}


export default Notifications;