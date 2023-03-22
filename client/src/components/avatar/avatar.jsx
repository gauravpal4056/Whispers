import { createAvatar } from '@dicebear/core';
import { adventurer, avataaars } from '@dicebear/collection';
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
                    sx={{ width: {xs:200, md:256}, height: {xs:200, md:256}, }}
                /> : props.name===selectedAvatar ? 
                    <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width:82, height: 82 ,border:"2px solid red", borderRadius: "15px", }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setProfilePic(avatarUrl))
                    }}
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