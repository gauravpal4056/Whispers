import { Box,TextField,Stack,styled,Paper,Divider,InputAdornment, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';  
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
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
                    margin:3,
                    
                    
                    '&:hover': {
                    backgroundColor: 'aliceblue',
                    opacity: [0.9, 0.8, 0.7],
                    },
                    display:{xs:"none", md:"flex"},
                    flexDirection: 'column',
                }}
            >
                <Typography>Participants</Typography>
                <Box sx={{  overflow:"hidden",  borderRadius:"30px",  bgcolor:"white" }}>
                    <TextField
                        id="input-with-icon-textfield"
                        sx={{width:"100%", bgcolor:"white"}}
                        
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchRoundedIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        margin="dense"
                        color="secondary" focused
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
                </Box>
            </Box>
        </>
    )
}

export default UserList