import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: null,
    name: "",
    googleId: "",
    inbox:[],
    sent:[],

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setGoogleId: (state, action) => {
            state.googleId = action.payload  
        },
        setUser: (state,  action) => {
            state.user = action.payload
        },
        setInbox: (state, action) => {
            state.inbox = [...state.inbox, action.payload]
        },
        setSent: (state, action) => {
            state.inbox = [...state.sent, action.payload]
        },
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const {setGoogleId, setUser, setInbox, setSent, setName} = authSlice.actions

export default authSlice.reducer