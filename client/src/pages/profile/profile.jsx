import { useDispatch, useSelector,  } from "react-redux"
import { setUser } from "../../store/authSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import AvatarContainer from "../../components/avatarContainer/container"
import AvatarImg from "../../components/avatar/avatar"
import {Box, Button, Typography,FormControlLabel, RadioGroup, TextField, Radio, CardMedia } from '@mui/material';
import axios from "axios"

const Profile = () => {
    const base = useSelector(state => state.profile.base)
    const [value, setValue] = useState('female');
    const [details, setDetails] = useState()
    const googleId = useSelector((state) => state.auth.googleId)
    const roomId = useSelector((state) => state.auth.roomID)
    const profilePic = useSelector((state) => state.auth.profilePic)
    const profileBase = useSelector((state) => state.profile.base)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange2 = (event) => {
        setValue(event.target.value);
    };
    const handleChange = (e) => {
        setDetails(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const name = details
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/create`, {
                name,
                roomId,
                googleId,
                gender: value,
                profileBase,
                sent:0,
                received:0,
                likes:0,
                hates:0
            })
            const {data, status} = res
            console.log(status);
            if(status===200){
                dispatch(setUser(data.user))
                navigate("/")
            }
            else{
                console.log("error");
            }
        }
    catch(e){
        console.log(e);
    }
}

    return (
        <Box>
            <Typography  variant="h3">Avatar</Typography>
            <Box
            
            sx={{
                width: '100%',
                height:"85vh",
                overflow: 'hidden',
                backgroundColor:"#f2ebe2",
                borderRadius:"25px 25px 0 0"
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection:"row",
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap:3
                }}>
                    <AvatarImg icon={true} base={base}/>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: {xs:'row', md:'column'},
                    }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: {xs:'column', md:'column'},
                    alignItems: 'center',
                    backgroundColor:"white",
                    borderRadius: "25px",
                    p:2,mt:8,color:"black"
                    
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
        
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                        }}>
                            <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >What should we call you ?</Typography>
                            <TextField sx={{margin:"0px"}} id="standard-basic" label="Name" onChange={handleChange} variant="standard"  />
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange2}
                                sx={{ margin:"0 auto"}}
                                >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Button  sx={{ height:"40px", fontSize:"25px", borderRadius:"15px", color:"white"}} onClick={handleSubmit} variant="contained">Create</Button>
                </Box>
            </Box>
                </Box>
                <AvatarContainer />
            </Box>
        </Box>
    )
}

export default Profile