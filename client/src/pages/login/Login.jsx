import "./login.css"

import { Box, Button, CardMedia, Typography } from "@mui/material"
const Login = () => {

    const login = () => {
        window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        )}
    

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