import { Box, Typography,Paper } from "@mui/material"
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
        <Paper sx={{
            height:"91vh",  borderRadius:"25px 25px 0 0 ", pt:1, px:1,overflow:"hidden" 
            }}>
            <Typography sx={{textAlign:{xs:"left", md:"center"}, fontWeight: 'bold', p:1}} variant="h3">Create</Typography>
            <Box sx={{height:"100%",  overflow:"hidden", borderRadius:"25px 25px 0 0"}}>
                {selectedUser ? isSelectingAvatar ? <SelectAvatar setIsSelectingAvatar={setIsSelectingAvatar}  /> : <FinalCard setSelectedUser={setSelectedUser} selectedUser={selectedUser} setIsSelectingAvatar={setIsSelectingAvatar} /> : <SelectUser setSelectedUser={setSelectedUser} />}
            </Box>
        </Paper>
    )
}

export default Create