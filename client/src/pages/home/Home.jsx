import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setRoutedPage } from "../../store/profileSlice"
import "./home.css"
import { Box, Typography, Avatar, Container,List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import UserList from "../../components/userList/userList"

const Home = () =>{

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const logout = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/logout`,
            "_self"
        )}
    return (
        <Box sx={{
            height:"90vh", width:"100%", display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"space-evenly"}}}>

            <UserList />

            <Box sx={{display:"flex", flexDirection:"column",}}>

                <Box sx={{display:"flex", flexDirection:"row", m:2, justifyContent:"center", alignItems:"center", gap:4}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={user.profilePicture}
                        sx={{ width: {xs:150, md:200}, height: {xs:150, md:200}, }}
                    />
                    <Box sx={{bgcolor:"#d7d9dd" , height:"100%", borderRadius:"25px",  display:"flex", flexDirection:"column"}}>
                        <Typography variant="h5">Hey! asdasdsdds {user.name}</Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:1, m:"0 9px"}} >
                        <Box   sx={{p:1, bgcolor: '#ace941',display:"flex",flexDirection:"column", justifyContent:"space-between", height: 150, width:{xs:"50%"},borderRadius:"25px " }}>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", p:1 }}>
                                <Typography sx={{  textAlign:"left", fontSize:{xs:"15px", md:"20px"}}}  variant="p">Whispers you've sent</Typography>
                                <img style={{width:"30px", height:"30px"}} src="/logo/sent2.png" />
                            </Box>
                            <Typography variant="h4">111</Typography>
                            <Typography sx={{fontFamily:"Rubik Iso",  }}  variant="h4">Sent</Typography>
                        </Box>
                        <Box sx={{p:1, bgcolor: '#b286fd', height: 150,width:{xs:"50%"},borderRadius:"25px",display:"flex",flexDirection:"column", justifyContent:"space-between",}} >
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",p:1}}>
                                <Typography sx={{ color:"white",  textAlign:"left", fontSize:{xs:"15px", md:"20px"}}}  variant="p">Whispers You Received</Typography>
                                <img style={{width:"30px", height:"30px"}} src="/logo/received.png" />
                            </Box>
                            <Typography  sx={{color:"white"}} variant="h4">111</Typography>
                            <Typography sx={{fontFamily:"Rubik Iso", color:"white",  }}  variant="h4">Received</Typography>

                        </Box>             
                </Box>
            </Box>

            <UserList />

        </Box>
    )
}
export default Home

 {/* <button  className="btn" >Welcome</button>
            <button  className="btn" >{user.name}</button>
            <button  className="btn" >{user.googleId}</button>
            <button  className="btn" onClick={logout} >Logout</button> */}