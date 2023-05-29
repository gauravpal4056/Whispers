import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedAvatarName: "",
    selectedAvatar:"",
    selectedWallpaper:"",
    selectedWhispers:null,
    createdAvatar:null,
    createdAvatarName:"",
    selectedUser:"",


}

export const whisperSlice = createSlice({
    name: 'whisper',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setSelectedAvatar: (state, action) => {
            state.selectedAvatar = action.payload
        },
        setSelectedAvatarName: (state, action) => {
            state.selectedAvatarName = action.payload
        },
        setSelectedWallpaper: (state, action) => {
            state.selectedWallpaper = action.payload
        },
        setSelectedWhispers: (state, action) => {
            state.selectedWhispers = action.payload
        },
        setCreatedAvatar: (state, action) => {
            state.createdAvatar = action.payload
        }


    }
})

export const { setCreatedAvatar, setSelectedUser, setSelectedAvatar, setSelectedAvatarName, setSelectedWallpaper, setSelectedWhispers } = whisperSlice.actions

export default whisperSlice.reducer