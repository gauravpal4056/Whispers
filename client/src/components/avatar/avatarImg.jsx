import { createAvatar } from '@dicebear/core';
import {  avataaars } from '@dicebear/collection';
import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';

const AvatarImage = (props) => {
    const [avatarUrl, setAvatarUrl] = useState("")
    const avatar = createAvatar(avataaars, props.base);
    const dataUri = async () => {
        const res = await avatar.toDataUri()
        setAvatarUrl(res)
    };  
    useEffect(() => {
        dataUri()
    }, )

    return (
                
                <Avatar
                    alt="Remy Sharp"
                    src={avatarUrl}
                    sx={{ width: props.w, height: props.h }}
                />
            
    )
}

export default AvatarImage