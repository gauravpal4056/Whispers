import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./home.css"
import { Paper, Box, Typography, Avatar,Chip, Container,List, ListItem, ListItemAvatar, ListItemText, CardMedia } from "@mui/material"
import UserList from "../../components/userList/userList"
import AvatarImg from "../../components/avatar/avatar"
import axios from "axios"
import { setUser } from "../../store/authSlice"
import AvatarImage from "../../components/avatar/avatarImg"
import OnlineUsers from "../../components/onlineUsers/onlineUsers"
import Notifications from "../../components/notifications/notifications"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const Home = () =>{
    const [selectedUser, setSelectedUser] = useState(null)
    const user = useSelector(state => state.auth.user)
    const dispatch= useDispatch()
    const getUser = async () => {
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/getUser/${user.googleId}`
            const {data} = await axios.get(url);
            const res = data.user;
            dispatch(setUser(res))
        }catch (error) {
            console.log(error)  
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    const seeState=() => {
        console.log(user);
    }
    return (


        <Paper sx={{
            height:"91vh",  borderRadius:"25px 25px 0 0 ", pt:1, px:5, 
        }}>
            <Typography sx={{textAlign:{xs:"left", md:"center"}, fontWeight: 'bold',ml:2,}} variant="h3">Home</Typography>
            <Box sx={{display:'flex',gap:7, flexDirection:"row ", justifyContent:{xs:"center", md:"center"}}}>

                <OnlineUsers />

                <Box sx={{ width:"100%", display:"flex", flexDirection:"column", gap:2,width:300,mt:2 }}>
                    <Box elevation={6} sx={{ display:"flex",borderRadius:"25px", justifyContent:"space-between", gap:1 }}>
                        <AvatarImage  base={user.profileBase} h={100} w={100} />
                        <Paper sx={{width:'100%', borderRadius:'25px'}}>
                            <Typography sx={{textAlign:"left", m:1}} variant="h6">Hey! {user.name}</Typography>
                        </Paper>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:1, }} >
                            <Paper elevation={8}   sx={{p:1, bgcolor: '#ace941', color:"black",display:"flex",flexDirection:"column", justifyContent:"space-between", height: 150, width:{xs:"50%"},borderRadius:"25px " }}>
                                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", p:1 }}>
                                    <Typography sx={{  textAlign:"left", fontSize:{xs:"15px", md:"15px"}}}  variant="p">Whispers you've sent</Typography>
                                    <img style={{width:"30px", height:"30px"}} src="/logo/sent2.png" />
                                </Box>
                                <Typography variant="h4">{user.sent}</Typography>
                                <Typography sx={{fontFamily:"Rubik Iso",  }}  variant="h5">Sent</Typography>
                            </Paper>
                            <Paper elevation={8}  sx={{p:1, bgcolor: '#b286fd', height: 150,width:{xs:"50%", md:150},borderRadius:"25px",display:"flex",flexDirection:"column", justifyContent:"space-between",}} >
                                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",p:1}}>
                                    <Typography sx={{ color:"white",  textAlign:"left", fontSize:{xs:"15px", md:"15px"}}}  variant="p">Whispers You Received</Typography>
                                    <img style={{width:"30px", height:"30px"}} src="/logo/received.png" />
                                </Box>
                                <Typography  sx={{color:"white"}} variant="h4">{user.received}</Typography>
                                <Typography sx={{fontFamily:"Rubik Iso", color:"white",  }}  variant="h5">Received</Typography>
                            </Paper>                   
                    </Box>
                    <Paper sx={{bgcolor:"white", color:"black", borderRadius:"25px", display:"flex", flexDirection:"row",p:1,alignItems:"center"}} >
                                <Box sx={{display:"flex", flexDirection:"column", p:1, }}>
                                    <Chip sx={{bgcolor:"#e277b7", color:"white",width:130}} icon={<PriorityHighIcon />} label="Remember" />
                                    <Typography sx={{textAlign:"left", fontWeight:"bold"}} variant="h6">Don't Be a Bully !</Typography>
                                    <Typography variant="caption" sx={{textAlign:"left"}} >Try to have a good conversion.  Care for other</Typography>
                                </Box>
                                <CardMedia sx={{ p:2,height:"100px",width:"100px"  }} image="/homeCard.gif" />
                            </Paper>  
                </Box>

                <Notifications />
                
            </Box>
            
        </Paper>


        // <Box sx={{overflow:"hidden"}}>
        //     <Typography variant="h4" onClick={seeState} >Home</Typography>
        //     <Box sx={{pt:4, borderRadius:"25px 25px 0 0 ", bgcolor:"#f7f6f0",height:"83vh", width:"100%", display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"space-evenly"}}}>
        //     <UserList />
        //     <Box sx={{display:"flex", flexDirection:"column", }}>
        //         <Box sx={{display:"flex", flexDirection:"row", margin:"10px 0",justifyContent:"center", alignItems:"center", }}>
        //             <Box sx={{height:"150px", width:"150px"}}><AvatarImg base={user.profileBase} userPic={true} /></Box>
        //             <Box sx={{width:"50%",bgcolor:"#202124" , color:"white", height:"100%",  display:"flex", flexDirection:"column", p:"0 9px", m:"0 9px", borderRadius:"25px"}}>
        //                 <Typography sx={{textAlign:"left", m:1}} variant="h6">Hey! {user.name}</Typography>
        //                 <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:4}}>
        //                     <Box sx={{display:"flex", }}>
        //                         <CardMedia sx={{height:"30px", width:"30px"}} image="/logo/likes.png" />
        //                         <Typography >Likes :</Typography>
        //                     </Box>
        //                     <Typography variant="h4" sx={{variant:"h2"}}>{user.likes}</Typography> 
        //                 </Box>
        //                 <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap:4}}>
        //                     <Box sx={{display:"flex", }}>
        //                         <CardMedia sx={{height:"26px", width:"26px"}} image="/logo/hates.png" />
        //                         <Typography >Hates :</Typography>
        //                     </Box>
        //                     <Typography variant="h4" sx={{variant:"h2"}}>{user.hates}</Typography> 
        //                 </Box>
        //             </Box>
        //         </Box>
                // <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:1, m:"0 9px"}} >
                //         <Box   sx={{p:1, bgcolor: '#ace941', color:"black",display:"flex",flexDirection:"column", justifyContent:"space-between", height: 150, width:{xs:"50%"},borderRadius:"25px " }}>
                //             <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", p:1 }}>
                //                 <Typography sx={{  textAlign:"left", fontSize:{xs:"15px", md:"15px"}}}  variant="p">Whispers you've sent</Typography>
                //                 <img style={{width:"30px", height:"30px"}} src="/logo/sent2.png" />
                //             </Box>
                //             <Typography variant="h4">{user.sent}</Typography>
                //             <Typography sx={{fontFamily:"Rubik Iso",  }}  variant="h4">Sent</Typography>
                //         </Box>
                //         <Box sx={{p:1, bgcolor: '#b286fd', height: 150,width:{xs:"50%"},borderRadius:"25px",display:"flex",flexDirection:"column", justifyContent:"space-between",}} >
                //             <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",p:1}}>
                //                 <Typography sx={{ color:"white",  textAlign:"left", fontSize:{xs:"15px", md:"15px"}}}  variant="p">Whispers You Received</Typography>
                //                 <img style={{width:"30px", height:"30px"}} src="/logo/received.png" />
                //             </Box>
                //             <Typography  sx={{color:"white"}} variant="h4">{user.received}</Typography>
                //             <Typography sx={{fontFamily:"Rubik Iso", color:"white",  }}  variant="h4">Received</Typography>
                //         </Box>                                     
                // </Box>
                // <Box sx={{height:"100%",margin:"9px",bgcolor:"white", color:"black", borderRadius:"25px", marginBottom:"100px", display:"flex", flexDirection:"row", p:2,alignItems:"center"}} >
                //     <Box sx={{display:"flex", flexDirection:"column", p:1, }}>
                //         <Chip sx={{bgcolor:"#e277b7", color:"white",margin:"30px 0"}} icon={<CardMedia sx={{ height: "20px",width:"20px",   }} image="/homeCard.gif" />} label="Remember" />
                //         <Typography sx={{textAlign:"left"}} variant="h5">Don't Be a Bully !</Typography>
                //         <Typography sx={{textAlign:"left"}} >Try to have a good conversion.  Care for other</Typography>
                //     </Box>
                //     <CardMedia sx={{ p:2,height: "150px",width:"150px"  }} image="/homeCard.gif" />
                // </Box>
        //     </Box>
        //     <UserList />
        // </Box>
        // </Box>
    )
}
export default Home
