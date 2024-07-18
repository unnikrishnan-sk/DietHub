import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chats: []
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        chatData: (state, action) => {
            console.log("here", action.payload);
            console.log("state", state);
            state.chats = [action.payload, ...state.chats]
            console.log("in redux", state.chats);
        }
    },
})

export const { chatData } = chatSlice.actions;
export default chatSlice.reducer;