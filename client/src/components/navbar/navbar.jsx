import { Link, Outlet } from "react-router-dom"
import { Stack, } from "@mui/system"
import { useSelector, useDispatch } from "react-redux"
import { Box, Typography, Avatar, Slide,BottomNavigationAction, Paper, BottomNavigation } from "@mui/material"
import { useState } from "react"
import AvatarImg from "../avatar/avatar"
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = (props) => {
    const toggleColorMode = () => {
        props.toggle(!props.mode)
    }
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
            <Box sx={{position:"fixed",top:"8px", width:{xs:"100%", md:"80%"}, }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center" 
                    spacing={0}
                    sx={{px:"1em",   }}
                >
                    <Box sx={{display:"flex", flexDirection:"row",  alignItems:"center",mx:{ md:3, lg:9 } }}>
                        <Avatar
                        alt="Remy Sharp"
                        src="/images/logo3.png"
                        sx={{ width: 46, height: 46 }}
                        />
                        <Typography sx={{fontWeight: 'bold', color:"white"  }} variant="h6">WHISPERS</Typography>
                    </Box>
                    {user ? <Box sx={{display:"flex", flexDirection:"row" }}> 
                                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                                                {props.mode === false ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                <IconButton sx={{ pl: 1 }} onClick={toggleColorMode} color="inherit">
                                    <LogoutIcon onClick={logout}/>
                                </IconButton>
                            </Box> : <Typography onClick={logout} > Logout   </Typography>}
                </Stack>
            </Box>



            {user && <Box sx={{ height:"5.5em",position: 'fixed', bottom: 0, left: 0, right: 0,  display:"flex", justifyContent:"center", zIndex:99  }} >
                        <Box sx={{display:"flex", justifyContent:"center", gap:4,borderRadius:"40px",padding:"10px 30px", m:2,bgcolor:"black"}}>
                            <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                                <Link to="/">{selected==="Home" ? <img name="Home" style={{height:"35px", width:"35px", }} src="/logo/home2S.png" /> : <img name="Home" style={{height:"35px", width:"35px",}} src="/logo/home2.png" />}</Link>
                                {/* <Box sx={[{transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected ==="Home"&&{bgcolor:"#ace941",width:"20px"}]} /> */}
                            </Box>
                            <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                                <Link to="/sent">{selected==="Inbox" ? <img name="inbox" style={{height:"30px", width:"30px",}} src="/logo/inboxS.png" /> : <img name="Inbox" style={{height:"30px", width:"30px", }} src="/logo/inbox.png" />}</Link>
                                {/* <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Inbox"&&{bgcolor:"#ace941",width:"20px"}]} /> */}
                            </Box>
                            <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                                <Link to="/received">{selected ==="Received" ? <img name="Received" style={{height:"30px", width:"30px",}} src="/logo/receivedS.png" /> : <img name="Received" style={{height:"30px", width:"30px", }} src="/logo/received.png" />}</Link>
                                {/* <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Received"&&{bgcolor:"#ace941",width:"20px"}]} /> */}
                            </Box>
                            <Box onClick={handleClick} sx={{ display:"flex", flexDirection:"column", alignItems:"center", zIndex:200 }}>
                                <Link to="/create">{selected==="Whisper" ? <img name="Whisper" style={{height:"30px", width:"30px", }} src="/logo/catS.png" /> : <img name="Whisper" style={{height:"30px", width:"30px", }} src="/logo/cat.png" />}</Link>
                                {/* <Box sx={[{marginTop:"5px",transitionProperty:"all", transitionDuration:"0.5s", width:"1px", height:"5px", borderRadius:"10px"},selected==="Whisper"&&{bgcolor:"#ace941",width:"20px"}]} /> */}
                            </Box>
                        </Box>
                    </Box> }

            
        </>
    )
}
export default Navbar