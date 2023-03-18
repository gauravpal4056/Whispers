import { useState,  } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../store/authSlice"
import axios from "axios"
import "./profile.css"
import features from "./features"
import Container from "../../components/avatarContainer/container"
import AvatarImg from "../../components/avatar/avatar"
import { Box, Tab, Tabs, Grid } from '@mui/material';

const Profile = () => {

    const [tab, setTab] = useState("eyes")
    const navigate = useNavigate()
    const userName = useSelector((state) => state.auth.name)
    const googleId = useSelector((state) => state.auth.googleId)
    const dispatch = useDispatch()
    const [details, setDetails] = useState({
        name:"", room:""
    })
    const base = useSelector(state => state.profile.base)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails({
            ...details,
            [name]: value
        })
    } 

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const {name, room} = details
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/profile/create`, {
                name: name,
                room: room,
                googleId: googleId
            })
            const {data, status} = res
            console.log(res);
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
        <>
            <h1>Create a profile</h1>
            <AvatarImg icon={true} base={base}/>
            <Tabs
                value={tab}
                onChange={handleTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                >
                <Tab value="eyes" label="eyes" />
                <Tab value="hair" label="hair" />
                <Tab value="mouth" label="mouth" />
            </Tabs>
            {/* <form onSubmit={handleSubmit}>
                <h1>hey ! {userName}</h1>
                <h2>What do you want to be called ?</h2>
                <input className="btn" name="name" value={details.name} onChange={handleChange} placeholder="Name"/>
                <h2>Where are all of your Friends ?</h2>
                <input className="btn" name="room" value={details.room} onChange={handleChange} placeholder="room ID"/>
                <h2>Are you ready to create your account?</h2>
                <button  className="btn" type="submit"  />
            </form> */}

            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                    <Item>xs=2</Item>
                    </Grid>
                ))}
            </Grid> */}
            
                {features.map((feature ) => {
                    return ((feature.name===tab) &&
                    <Box
                        sx={{
                            width: 1200,
                            height: "100%",
                            backgroundColor: 'primary.dark',
                        }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 18, md: 28 }}>
                            <Container base={base} variantName={feature.name} variants={feature.array} />
                        </Grid>
                    </Box>
                )})}
            
-
        </>
    )
}

export default Profile