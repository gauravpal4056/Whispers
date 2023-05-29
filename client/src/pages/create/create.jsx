import { Box, Typography, } from "@mui/material"
import { useSelector } from "react-redux"
import SelectAvatar from "../../components/create/selectAvatar"
import SelectUser from "../../components/create/selectUser"
import FinalCard from "../../components/create/finalCard"
import { useState } from "react"
import AvatarImg from "../../components/avatar/avatar"


const Create = () => {
    // const selectedUser =  useSelector((state) => state.whisper.selectedUser)
    // const createdAvatar = useSelector((state) => state.whisper.createdAvatar)
    const [selectedUser, setSelectedUser] = useState(null)
    const [isSelectingAvatar, setIsSelectingAvatar] = useState(false)
    return (
        <Box sx={{height:"93vh",width:"100%", overflow:"hidden"}} >
        <Typography variant="h3" >Create</Typography>
            <Box sx={{height:"100%", bgcolor:"#f7f6f0", overflow:"hidden", borderRadius:"25px 25px 0 0"}}>
                {selectedUser ? isSelectingAvatar ? <SelectAvatar setIsSelectingAvatar={setIsSelectingAvatar}  /> : <FinalCard setSelectedUser={setSelectedUser} selectedUser={selectedUser} setIsSelectingAvatar={setIsSelectingAvatar} /> : <SelectUser setSelectedUser={setSelectedUser} />}
            </Box>
        </Box>
    )
}

export default Create