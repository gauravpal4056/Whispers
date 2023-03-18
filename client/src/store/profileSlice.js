import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedAvatar: "",
    base:{
        seed: "Felix",
        earrings: ["variant01"],
        eyebrows: ["variant01"],
        eyes: ["variant01"],
        features: ["blush"],
        glasses: ["variant02"],
        hair : ["long05"],
        hairColor: ["e5d7a3"],
        mouth: ["variant01"],
        skinColor: ["ecad80"],
    },

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setSelectedAvatar: (state, action) => {
            state.selectedAvatar = action.payload
        },
        setBase: (state, action) => {
            state.base = action.payload
        }
    }
})

export const { setSelectedAvatar, setBase } = profileSlice.actions

export default profileSlice.reducer