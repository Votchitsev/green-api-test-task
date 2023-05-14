import { createSlice } from '@reduxjs/toolkit';
import { addToLocalStorage, getFromLocalStorage } from 'localStore';
import { type ChatInterface } from './interface';

const initialState: ChatInterface = {
  chatList: getFromLocalStorage('chatList') || [],
  activeChat: null,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action) => {
      addToLocalStorage('chats', JSON.stringify([...state.chatList, action.payload]));

      state.chatList = [...state.chatList, action.payload];
      return state;
    }
  },
  },
);

export default chatSlice.reducer;

export const { createChat } = chatSlice.actions;
