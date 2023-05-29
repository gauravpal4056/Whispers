import AvatarImg from "../avatar/avatar"
import AvatarContainer from "../avatarContainer/container"
import { Box } from "@mui/system"
import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"


const   SelectAvatar = (props) => {
    const base = useSelector(state => state.profile.base)
    const createAvatar = () => {
        props.setIsSelectingAvatar(false)
    }

    return (
        <>
            <Box>
                <Typography variant="h3">Select your Face</Typography>
                <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <AvatarImg icon={true} base={base} />
                        <Button onClick={createAvatar} variant="contained" sx={{m:1, height:"50px", fontSize:"25px", borderRadius:"20px"}} >Select</Button>
                    </Box>
                    <AvatarContainer />
                </Box>
            </Box>
        </>
    )
}
export default SelectAvatar