import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"
import profileSlice from "./profileSlice";
import whisperSlice from "./whisperSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        whisper: whisperSlice
    }
})

export default store