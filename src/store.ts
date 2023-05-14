import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'modules/authorization/state/slice';
import chatReducer from 'modules/chat/state/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
