import { useDispatch, useSelector,  } from "react-redux"
import { useNavigate } from "react-router-dom"

import AvatarContainer from "../../components/avatarContainer/container"
import AvatarImg from "../../components/avatar/avatar"
import {Box, Button } from '@mui/material';
import { setRoutedPage } from "../../store/profileSlice";

const Profile = () => {
    const navigate = useNavigate()
    const userName = useSelector((state) => state.auth.name)
    const base = useSelector(state => state.profile.base)

    const handleClick = () => {
        navigate("/profile/name")
    }

    return (
        <>
            <Box
            
            sx={{
                width: '100%',
                height:"100vh",
                overflow: 'hidden',
                backgroundColor:"#f2ebe2"
            }}>
                                <h1>Hey {userName}!</h1>

                <Box sx={{
                    display: 'flex',
                    flexDirection:"column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding:{
                        sm:"0px",
                        md:"20px 200px 0 200px",                           
                    },
                    gap:3

                }}>
                    <AvatarImg icon={true} base={base}/>
                    <Button onClick={handleClick} variant="contained">Create</Button>
                </Box>
                <AvatarContainer />
            </Box>
        </>
    )
}

export default Profile