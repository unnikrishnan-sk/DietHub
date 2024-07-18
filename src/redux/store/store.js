import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../slice/chatSlice.js'

export const store = configureStore({
    reducer: {
        chat: chatReducer
    },
});
