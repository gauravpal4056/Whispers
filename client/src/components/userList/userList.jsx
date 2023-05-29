import "./userList.css"
import { Box,TextField,Stack,styled,Paper,Divider,InputAdornment, Typography } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SelectUser from "../create/selectUser";
const UserList = (props) => {

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,

        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <>
            <Box
                sx={{
                    width: 600,
                    minHeight: 200,
                    margin:2,
                    display:{xs:"none", md:"flex"},
                    flexDirection: 'column',
                }}
            >
                <SelectUser />
                {/* <Box sx={{  overflow:"hidden",  borderRadius:"30px",  bgcolor:"white", display:"flex", flexDirection:"row", p:1 }}>
                    <SearchRoundedIcon />
                    <input className="find"
                        style={{width:"100%", backgroundColor:"white", border:"0px" ,color:"black", focused:{border:"0px"}}}
                    />
                </Box>
                <Box sx={{marginTop:"20px",bgcolor:"white", borderRadius:"25px" , overflow:"hidden", padding:1}}>
                    <Stack
                        direction="column" 
                        divider={<Divider orientation="horizontal" flexItem />}
                        borderRadius="25px"
                        spacing={2}
                        >
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                    </Stack>
                </Box> */}
            </Box>
        </>
    )
}

export default UserList