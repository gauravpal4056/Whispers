import { Link, Outlet } from "react-router-dom"
import { Stack, } from "@mui/system"
import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Avatar, Slide,BottomNavigationAction, Paper, BottomNavigation } from "@mui/material"
import { useState } from "react"
import AvatarImg from "../avatar/avatar"

const Navbar = () => {
    const [selected, setSelected] = useState("Home");
    const user = useSelector(state => state.auth.user)
    const handleClick = (e) => {
        console.log(e.target.name);
        if(e.target.name)
            setSelected(e.target.name)
    }
    const logout = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/logout`,
            "_self"
        )}

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                spacing={0}
                sx={{p:"2vh",height:"3vh", bgcolor:"black", zIndex:99999 }}
            >
                <Box sx={{display:"flex", flexDirection:"row",  alignItems:"center", gap:2}}>
                    <Avatar
                    alt="Remy Sharp"
                    src="/images/logo2.png"
                    sx={{ width: 46, height: 46 }}
                    />
                    <Typography fontWeight={"800"} sx={{fontWeight: 'bold', fontFamily:"Rubik Iso", color:"white"  }} variant="h5">WHISPERS</Typography>
                </Box>
                {user ? < Box onClick={logout} sx={{height:60, widht:60}}><AvatarImg userPic={true} base={user.profileBase} /><Typography>Logout</Typography></Box> : <Typography onClick={logout} > Logout   </Typography>}
            </Stack>
            {user && <Box sx={{ height:"12vh",position: 'fixed', bottom: 0, left: 0, right: 0,  display:"flex", justifyContent:"center", zIndex:99  }} >
                <Box sx={{display:"flex", justifyContent:"center", gap:4,borderRadius:"25px",padding:"10px 30px", m:2,bgcolor:"black"}}>
                    <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                        <Link to="/">{selected==="Home" ? <img name="Home" style={{height:"45px", width:"45px", }} src="/logo/home2S.png" /> : <img name="Home" style={{height:"45px", width:"45px", }} src="/logo/home2.png" />}</Link>
                        <Box sx={[{marginTop:"1px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected ==="Home"&&{bgcolor:"#ace941",width:"20px"}]} />
                    </Box>
                    <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                        <Link to="/sent">{selected==="Inbox" ? <img name="inbox" style={{height:"40px", width:"40px", }} src="/logo/inboxS.png" /> : <img name="Inbox" style={{height:"40px", width:"40px", }} src="/logo/inbox.png" />}</Link>
                        <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Inbox"&&{bgcolor:"#ace941",width:"20px"}]} />
                    </Box>
                    <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                        <Link to="/received">{selected ==="Received" ? <img name="Received" style={{height:"40px", width:"40px", }} src="/logo/receivedS.png" /> : <img name="Received" style={{height:"40px", width:"40px", }} src="/logo/received.png" />}</Link>
                        <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Received"&&{bgcolor:"#ace941",width:"20px"}]} />
                    </Box>
                    <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                        <Link to="/create">{selected==="Whisper" ? <img name="Whisper" style={{height:"40px", width:"40px", }} src="/logo/catS.png" /> : <img name="Whisper" style={{height:"40px", width:"40px", }} src="/logo/cat.png" />}</Link>
                        <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Whisper"&&{bgcolor:"#ace941",width:"20px"}]} />
                    </Box>
                </Box>
            </Box> }

            <Outlet />
        </>
    )
}
export default Navbar