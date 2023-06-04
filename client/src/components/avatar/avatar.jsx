import { createAvatar } from '@dicebear/core';
import {  avataaars } from '@dicebear/collection';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBase, setSelectedAvatar } from '../../store/profileSlice';
import { Avatar } from '@mui/material';
import { setProfilePic } from '../../store/authSlice';

const AvatarImg = (props) => {
    const dispatch = useDispatch()
    const [avatarUrl, setAvatarUrl] = useState("")
    const avatar = createAvatar(avataaars, props.base);
    const dataUri = async () => {
        const res = await avatar.toDataUri()
        setAvatarUrl(res)
    };  
    const selectedAvatar = useSelector(state => state.profile.selectedAvatar)
    useEffect(() => {
        dataUri()
    }, )

    return (
                props.icon ? 
                <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width: {xs:180, md:230}, height: {xs:180, md:236}, }}
                /> : props.name===selectedAvatar ? 
                    <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width:82, height: 82 ,border:"2px solid red", borderRadius: "15px", }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setSelectedAvatar(props.name))
                        dispatch(setProfilePic(avatarUrl))
                    }}
                /> : props.userPic ? <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width: "100%",height:"100%" }}
                /> :
                    <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width:86, height: 86, borderRadius: "15px", }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setSelectedAvatar(props.name))
                        dispatch(setProfilePic(avatarUrl))
                    }}
                />
            
    )
}

export default AvatarImg