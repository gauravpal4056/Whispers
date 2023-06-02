import { Paper, Typography } from "@mui/material";

const OnlineUsers = () => {

    return (
        <>
            <Paper elevation={2} sx={{height: "70vh", width:"20%", display:{xs:"none", md:"block"},p:3 }} >
                <Typography variant="h4" sx={{fontWeight:"bold", textAlign:"left", mb:2}}>Online</Typography>
            </Paper>
        </>
    )

}

export default OnlineUsers;