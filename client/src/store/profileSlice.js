import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedAvatar: "",
    base:{
        seed: "Aneka",
        style: ["circle",],
        accessoriesProbability: 100,
        facialHairProbability: 100,
        topProbability: 100,
        backgroundColor: ["b6e3f4"]
    },
    routedPage:"Whispers"

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
        },
        setRoutedPage: (state, action) => {
            state.routedPage = action.payload
        }
    }
})

export const { setSelectedAvatar, setBase, setRoutedPage } = profileSlice.actions

export default profileSlice.reducer