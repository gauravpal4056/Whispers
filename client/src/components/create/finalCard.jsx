import { Typography, Box, Button, Avatar } from "@mui/material"
import { useEffect, useState } from "react"
import AvatarImg from "../avatar/avatar"
import { createClient } from 'pexels';
import keyword_extractor from "keyword-extractor"
import { useSelector } from "react-redux";
import generate from 'japanese-name-generator'
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FinalCard = (props) => {
    const [details, setDetails] = useState("")
    const base = useSelector(state => state.profile.base)
    const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);
    const [bg, setBg] = useState("")
    const [keywords, setKeywords] = useState([])
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const senderId = useSelector(state => state.auth.user.googleId)
    const receiverId = props.selectedUser.googleId
    const avatar = useSelector(state => state.profile.base)
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState("");


    const handleClose = () => {
        setOpen(false);
        props.setSelectedUser(null)
    };

    const generateWallpaper = async (e) => {
        setDetails(e.target.value)
        const words =
            keyword_extractor.extract(details,{
                language:"english",
                remove_digits: true,
                return_changed_case:true,
                remove_duplicates: true
            });
        setKeywords(words)
        var query = keywords[0];
        console.log(query);
        const res = await client.photos.search({query, per_page: 1 })
        setBg(res.photos[0].src.large)
    }
    const changewallpaper = async () => {
        const words =
        keyword_extractor.extract(details,{
            language:"english",
            remove_digits: true,
            return_changed_case:true,
            remove_duplicates: true
        });
        setKeywords(words)
        var query = keywords[count%keywords.length] 
        setCount(count + 1)
        const res = await client.photos.search({query, per_page: 1 })
        setBg(res.photos[0].src.medium)
        console.log(query);
    }

    const sendWhispers = async (e) => {
        e.preventDefault()
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/whispers/sendWhispers`
        try {
            const res = await axios.post(url,{
                senderId,
                receiverId,
                content:details,
                background:bg,
                avatar,
                avatarName:name
            })
            console.log(res.status);
            if(res.status === 200)
                setAlert("successfully sent")
            else
                setAlert("something went wrong")
            setOpen(true);
        } catch (error) {
            console.log(error);
            setAlert("something went wrong")
        }
 
    }
    const setAvatarName = async () => {
        const temp = generate()
        setName(temp.firstName)
    }
    useEffect(() => {
        setAvatarName()
    },[])
    return (
        <>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Whispering to {props.selectedUser.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
            <Box sx={{display:"flex", flexDirection:"column", gap:3, height:"100%",p:3, alignItems:"center",  }}>
                <Box sx={{width: "150px", bgcolor:"white", borderRadius:"25px", p:1, boxShadow:"5px 10px 5px  #aaaaaa"}}>
                    <Typography sx={{color:"#626262", textAlign:'left'}} variant="p">Sending Whisper to  </Typography>
                    <Box sx={{display:"flex",alignItems:"center", gap:2 }}>
                        <Box  sx={{height:"60px", width:"60px"}}><AvatarImg base={props.selectedUser.profileBase} userPic={true} /></Box>
                        <Typography sx={{color:"black   "}} variant="h5" >{props.selectedUser.name}</Typography>
                    </Box>
                </Box>
                <Box  sx={{position:"relative",display:"flex",flexDirection:"column", backgroundImage:`url("${bg}")`, backgroundPosition:"center", backgroundSize:"cover", height:"47vh", borderRadius:"25px",width:'300px' }} >
                    <Box onClick={changewallpaper} sx={{mx:1,height:'30px', cursor:"pointer", width:"30px", position:"absolute", top:0, right:0, color:'black', fontSize:"35px", '&:hover': {color: "pink",},}}>&#9728;</Box>
                    <Box sx={{display:"flex", m:3,flexDirection:"column", alignItems:"center",justifyContent:"center",height:"100%" ,gap:3  }}>
                            <Box sx={{bgcolor:"rgba(0,0,0,0.5)",borderRadius:"25px", p:2, display:"flex",alignItems:"center", gap:2,justifyContent:"center", flexDirection:"column" }}>
                                <Typography style={{cursor:"pointer"}} onClick={setAvatarName} variant="h5" ><span style={{fontSize:"15px"}}>by  </span>{name}</Typography>
                                <Box onClick={() => {props.setIsSelectingAvatar(true)}} sx={{height:"80px", width:"80px"}}>
                                    <AvatarImg userPic={true} base={base} />
                                </Box>
                                <Typography variant="p"  >{details}</Typography>
                            </Box>
                        </Box>
                </Box>
                <form onSubmit={sendWhispers} style={{display:'flex', flexDirection:'row', gap:"10px", justifyContent:"space-between", }}>
                    <input value={details} required={true} onChange={generateWallpaper}  style={{borderRadius:"15px", border:"0", padding:"14px", width:"100%"}} placeholder="What you say" />
                    {/* <Button onClick={generateWallpaper} sx={{bgcolor:"pink",color:"white", borderRadius:'15px'}} >Genrate</Button> */}
                    <Button type="submit" sx={{borderRadius:"25px"}} variant="contained">Send</Button>

                </form>
            </Box>
        </>
    )
}

export default FinalCard