import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { addToLocalStorage, getFromLocalStorage } from 'localStore';
import { MessageInterface, type ChatInterface, type ChatItemInterface } from './interface';
import { BaseURL } from 'appConfig';

interface ReqDataInterface {
  idInstance: string;
  apiTokenKey: string;
  destNumber?: number;
  message?: string;
};

export const fetchSendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (data: ReqDataInterface) => {
    try {
      const response = await axios.post(
        `${BaseURL}waInstance${data.idInstance}/SendMessage/${data.apiTokenKey}`,
        {
          chatId: `${data.destNumber}@c.us`,
          message: data.message,
        },
      );
      
      if (response.statusText === 'OK') {
        return data.message;
      }

      return response.statusText;
    } catch (error) {
      throw new Error (error);
    }
  },
);

export const fetchIncomingMessages = createAsyncThunk(
  'chat/fetchIncomingMessages',
  async (data: ReqDataInterface) => {
    try {
      const response = await axios.get(`${BaseURL}waInstance${data.idInstance}/ReceiveNotification/${data.apiTokenKey}`);
      
      if (response.data?.receiptId) {
        
        await axios.delete(
          `${BaseURL}waInstance${data.idInstance}/DeleteNotification/${data.apiTokenKey}/${response.data.receiptId}`
        ); 
      };

      if (response.statusText === 'OK') {
        return response.data;
      };

      throw new Error(response.statusText);
    } catch (error) {
      return error;
    };
  },
);

const initialState: ChatInterface = {
  chatList: getFromLocalStorage('chats') || [],
  activeChat: Number(getFromLocalStorage('activeChat')) || null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    createChat: (state, action) => {
      const newChatItem: ChatItemInterface = {
        phoneNumber: action.payload,
        messages: [],
      };

      addToLocalStorage('chats', JSON.stringify([...state.chatList, newChatItem]));

      state.chatList = [...state.chatList, newChatItem];
      return state;
    },
    removeChat: (state, action) => {
      const removingChat = action.payload;

      state.chatList = state.chatList.filter(
        (chat: ChatItemInterface) => Number(chat.phoneNumber) !== removingChat
      );
      
      addToLocalStorage('chats', JSON.stringify(state.chatList));

      if (state.activeChat === removingChat) {
        state.activeChat = null;
      };

      return state;
    },
    setActive: (state, action) => {
      if (state.activeChat === action.payload) {
        state.activeChat = null;
        addToLocalStorage('activeChat', String(state.activeChat));  
        return state;
      }

      state.activeChat = action.payload;
      addToLocalStorage('activeChat', String(state.activeChat));
      return state;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchSendMessage.fulfilled, (state, action) => {
      const message: MessageInterface = {
        type: 'outgoing',
        text: String(action.payload),
      };
      
      const activeChat = state.chatList.find(
        (chat: ChatItemInterface) => Number(chat.phoneNumber) === Number(state.activeChat),
      );

      activeChat.messages = [...activeChat.messages, message];

      addToLocalStorage('chats', JSON.stringify(state.chatList));

      return state;
    });
    builder.addCase(fetchIncomingMessages.fulfilled, (state, action) => {
      if (!action.payload) {
        return state;
      };

      const activeChat = state.chatList.find(
        (chat: ChatItemInterface) => Number(chat.phoneNumber === action.payload.body.senderData.chatId.replace(/@c.us/, '')),
      );

      const message: MessageInterface = {
        type: 'incoming',
        text: action.payload.body.messageData.textMessageData.textMessage,
      };

      activeChat.messages = [...activeChat.messages, message];

      addToLocalStorage('chats', JSON.stringify(state.chatList));

      return state;
    });
  },
});

export default chatSlice.reducer;

export const { createChat, removeChat, setActive } = chatSlice.actions;
