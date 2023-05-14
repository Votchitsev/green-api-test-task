import { createSlice } from '@reduxjs/toolkit';
import { addToLocalStorage, getFromLocalStorage } from 'localStore';
import { type ChatInterface } from './interface';

const initialState: ChatInterface = {
  chatList: getFromLocalStorage('chats') || [],
  activeChat: Number(getFromLocalStorage('activeChat')) || null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action) => {
      addToLocalStorage('chats', JSON.stringify([...state.chatList, action.payload]));
      state.chatList = [...state.chatList, action.payload];
      return state;
    },
    removeChat: (state, action) => {
      const removingChat = action.payload;

      state.chatList = state.chatList.filter(chat => Number(chat) !== removingChat);
      addToLocalStorage('chats', JSON.stringify(state.chatList));

      if (state.activeChat === removingChat) {
        state.activeChat = null;
      };

      return state;
    },
    setActive: (state, action) => {
      if (state.activeChat === action.payload) {
        state.activeChat = null;
        return state;
      }

      state.activeChat = action.payload;
      addToLocalStorage('activeChat', String(state.activeChat));
      return state;
    }
  },
});

export default chatSlice.reducer;

export const { createChat, removeChat, setActive } = chatSlice.actions;
