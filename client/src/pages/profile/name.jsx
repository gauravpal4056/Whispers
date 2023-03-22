import { setUser } from "../../store/authSlice"
import axios from "axios"
import { useState, useEffect  } from "react"
import { useSelector, useDispatch } from "react-redux"
import CardMedia from '@mui/material/CardMedia';
import {Box, TextField, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { setRoutedPage } from "../../store/profileSlice";
import { useNavigate } from "react-router-dom";





const Name = () => {
    const [value, setValue] = useState('female');
    const [details, setDetails] = useState()
    const googleId = useSelector((state) => state.auth.googleId)
    const roomId = useSelector((state) => state.auth.roomID)
    const profilePic = useSelector((state) => state.auth.profilePic)
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
                profilePic
            })
            const {data, status} = res
            console.log(data.user);
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
        <Box sx={{
            width:"100%",
            overflow:"hidden"
        }}>

            <img src="/name.gif" />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:"aliceblue",
                    borderRadius: "15px",
                    p:2,mt:8
                    
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
                            {/* <Typography variant="h5" component="h4" sx={{textAlign:"left"}} >This is You. Right!</Typography> */}
                            <TextField sx={{margin:"0px"}} id="standard-basic" label="Name" onChange={handleChange} variant="standard"  />
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange2}
                                sx={{justifyContent:"space-evenly", margin:"0 auto"}}
                                >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 ,height:100 }}
                            image={profilePic}
                            alt="Live from space album cover"
                        />
                    </Box>
                </Box>
            </Box>
            <Button sx={{margin:"10px 70px", borderRadius:"25px", width:"90px"}} onClick={handleSubmit} size="medium" variant="contained">Create</Button>

        </Box>
    )
}

export default Name