import "./login.css"
import { signInWithPopup } from "firebase/auth"
import {auth, provider} from "../../utils/firebase"
import axios from "axios"
import {  useDispatch } from "react-redux"
import { setGoogleId } from "../../store/authSlice"

import { Box, Button, CardMedia, Typography } from "@mui/material"

const Login = () => {
    const dispatch = useDispatch()

    const login = async() => {
        const data = await signInWithPopup(auth, provider)
        const uid = data.user.uid
        try {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/auth/checkUser/${uid}`
            const {data} = await axios.get(url );
            if(data.exist){
                dispatch(setUser(res))
                console.log(user_exists);
                }
            else{
                dispatch(setGoogleId(data.user.uid))
                dispatch(setName(data.user.displayName))
            }
        }catch (error) {
            console.log(error)
        }
        localStorage.setItem("uid", data.user.uid)
        window.location.reload()

        
    }
    

    return (
        <>
            <Box sx={{height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Typography sx={{fontFamily:"Rubik Iso",  }}  variant="h2">Whispers</Typography>
                <CardMedia sx={{ minHeight: "50vh",width:{xs:"100%", md:"40vw"}  }} image="/homeBg.png" />
                <Button onClick={login} variant="contained" >Login with Google</Button>
            </Box>
        </>
    )
}

export default Login