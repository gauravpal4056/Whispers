import { Link, Outlet } from "react-router-dom"
import { Stack, } from "@mui/system"
import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Avatar,BottomNavigationAction, Paper, BottomNavigation } from "@mui/material"
// import {SendIcon} from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { useState } from "react"

const Navbar = () => {
    const [value, setValue] = useState(0);
    const routedPage = useSelector(state => state.profile.routedPage)
    const user = useSelector(state => state.auth.user)
    

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={0}
                sx={{marginBottom:"40px"}}
            >
                <Avatar
                    alt="Remy Sharp"
                    src="/images/logo2.png"
                    sx={{ width: 46, height: 46 }}S
                />
                <Typography sx={{fontWeight:"bold"}} variant="h5">WHISPERS</Typography>
                {user ? <Avatar
                    alt="Remy Sharp"
                    src= {user.profilePicture}
                    sx={{ width: 46, height: 46 }}
                /> : <Typography >Hey !   </Typography>}
            </Stack>
            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderRadius:"25px", bgcolor:"black"  }} >
                    <BottomNavigation
                    
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Sent" icon={<SendIcon />} />
                    <BottomNavigationAction sx={{ fontSize:"20px", borderRadius:"25px", }} label="Whisper" icon={<Box sx={{height:"60px", width:"60px", bgcolor:"black", borderRadius:"100%", position:"absolute", top:"-10px", display:"flex", alignItems:"center", justifyContent:"center"}}><img style={{height:"40px", width:"40px", }} src="/logo/cat.png" /></Box>} />
                    <BottomNavigationAction label="Received" icon={<MarkEmailUnreadIcon/>} />
                    </BottomNavigation>
            </Box>
            <Outlet />
        </>
    )
}
export default Navbar