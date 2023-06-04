import { Box,Stack, Typography,List, ListItem,ListItemIcon,ListItemButton,   ListItemAvatar, Avatar, ListItemText} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Divider from '@mui/material/Divider';
import {  useSelector } from "react-redux";
import AvatarImg from "../avatar/avatar";
import axios from "axios"
import { useEffect, useState } from "react";

const SelectUser = (props) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const room = useSelector(state => state.auth.user.roomId)
    console.log(room);
    const getAllUsers = async () => {
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/getAllUsers/${room}`
            const res = await axios.get(url)
            setUsers(res.data.users)
        } catch (error) {
            console.log(error);
        }
    }
    const searchUser = (e) => {
        setSearch(e.target.value)  
    }
    const selectUser = (user) => {
        console.log(user);
        if(user)
            props.setSelectedUser(user)
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        < Box sx={{display:"flex",flexDirection: 'column', alignItems:"center", height:"100%", }}>
            <Box
                sx={{
                    minHeight: 200,
                    margin:2,
                    display:"flex",
                    flexDirection: 'column',
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <Typography variant="h6" sx={{m:1, }}>Select a User</Typography>
                <Box sx={{ width:"100%",p:2, overflow:"hidden", display:"flex",alignItems:"center", flexDirection:"row",}}>
                    <SearchOutlinedIcon sx={{color:"#ace941" }} />
                    <input onChange={searchUser} placeholder="Find" className="find"
                        style={{width:"100%", height:"50px",  border:"6px", borderRadius:"15px" ,color:"white",padding:"8px",fontSize:"20px", focused:{border:"0px"}}}
                    />
                </Box>
                <Box sx={{ width: '100%',height:"100%", maxWidth: 360,marginTop:"10px",bgcolor:"white", borderRadius:"25px" , overflow:"hidden",overflowY:"scroll", padding:1,color:"black",mb:"17vh"  }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {users?.filter((user) => {
                                return search.toLowerCase()==="" ? user : user.name.toLowerCase().includes(search) 
                            }).map((user) => {
                                return (
                                    <>
                                        <Box key={user._id} >
                                        <ListItem onClick={() => {selectUser(user)}} disablePadding>
                                            <ListItemButton>
                                            <ListItemIcon sx={{width:46, height: 46,}} >
                                            <AvatarImg  userPic={true} base={user.profileBase} />
                                            </ListItemIcon>
                                            <ListItemText primary={user.name} secondary="offline" />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Box><Box key={user._id} >
                                        <ListItem onClick={() => {selectUser(user)}} disablePadding>
                                            <ListItemButton>
                                            <ListItemIcon sx={{width:46, height: 46,}} >
                                            <AvatarImg  userPic={true} base={user.profileBase} />
                                            </ListItemIcon>
                                            <ListItemText primary={user.name} secondary="offline" />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Box><Box key={user._id} >
                                        <ListItem onClick={() => {selectUser(user)}} disablePadding>
                                            <ListItemButton>
                                            <ListItemIcon sx={{width:46, height: 46,}} >
                                            <AvatarImg  userPic={true} base={user.profileBase} />
                                            </ListItemIcon>
                                            <ListItemText primary={user.name} secondary="offline" />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                    </>
                                )
                            })}
                        </List>
                    </nav>
                </Box>
            </Box>
        </Box>
    )
}

export default SelectUser