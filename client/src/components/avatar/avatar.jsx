import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBase, setSelectedAvatar } from '../../store/profileSlice';
import { Avatar } from '@mui/material';

const AvatarImg = (props) => {
    const dispatch = useDispatch()
    const [avatarUrl, setAvatarUrl] = useState("")
    const avatar = createAvatar(adventurer, props.base);
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
                    sx={{ width: 186, height: 186 }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setSelectedAvatar(props.name))
                        }}
                /> : props.name===selectedAvatar ? 
                <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width:76, height: 76, backgroundColor: "#E4DCCF" }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setSelectedAvatar(props.name))
                    }}
                /> : 
                <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width:76, height: 76 }}
                    onClick={() => {
                        dispatch(setBase(props.base))
                        dispatch(setSelectedAvatar(props.name))
                    }}
                />
            
    )
}

export default AvatarImg