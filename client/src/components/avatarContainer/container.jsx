import AvatarImg from "../avatar/avatar";
import features from "./features.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Box, Tab, Tabs, Grid } from '@mui/material';


const AvatarContainer = () => {

    const base = useSelector(state => state.profile.base)
    const color = base.backgroundColor
    const [tab, setTab] = useState("accessories")

    const handleTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
            <>
            <Box sx={{width:{xs:"100vw", md:"70vw"}}}>
                <Box sx={{backgroundColor: "#f6f6f6",  borderRadius:"25px ", overflow:"hidden"}}>
                <Tabs
                    value={tab}
                    onChange={handleTab}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                        marginBottom:"10px"
                    }}
                    >
                    <Tab value="accessories" label="accessories" />
                    <Tab value="accessoriesColor" label="accessoriesColor" />
                    <Tab value="clothing" label="clothing" />
                    <Tab value="clothesColor" label="clothesColor" />
                    <Tab value="eyebrows" label="eyebrows" />
                    <Tab value="eyes" label="eyes" />
                    <Tab value="facialHair" label="facialHair" />
                    <Tab value="facialHairColor" label="facialHairColor" />
                    <Tab value="hairColor" label="hairColor" />
                    <Tab value="hatColor" label="hatColor" />
                    <Tab value="mouth" label="mouth" />
                    <Tab value="skinColor" label="skinColor" />
                    <Tab value="top" label="top" />
                    <Tab value="backgroundColor" label="backgroundColor" />
                </Tabs>

                { features.map((feature ) => {
                    return ((feature.name===tab) &&
                            <Grid key={feature.name} sx={{ padding:"0 0 200px 0", margin:"100px", height:"40vh" , bgcolor:"#f6f6f6", overflow: "hidden", overflowY: "scroll",zIndex:57  }} container spacing={{ xs: 2, md: 2}} columns={{ md: 16 }} justifyContent="center" >
                            {feature.array.map((variant) => {
                                const newBase = {...base, [feature.name]:[variant]}
                                return (<Grid  item xs={3} sm={4} md={2} lg={2} sx={{paddding:"0 8px 0 8px"}}><AvatarImg name={variant} key={variant} base={newBase} /></Grid>)
                            })}
                        </Grid>
                        

                )})}
                </Box>
                </Box>
            </>
    )
}

export default AvatarContainer;