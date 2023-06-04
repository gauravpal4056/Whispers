import Navbar from "./navbar"
import { Link, Outlet } from "react-router-dom"
import { Box, Typography, Avatar,Chip, Container,List, ListItem, ListItemAvatar, ListItemText, CardMedia } from "@mui/material"


const Outer = (props) => {

    return (
        <>
            <Box sx={{height:"100vh", }}>
                <Navbar mode={props.mode} toggle={props.toggle} />
                <Box sx={{pt:"9vh", }}>
                    <Outlet />
                </Box>
            </Box>
            
        </>
    )
}

export default Outer