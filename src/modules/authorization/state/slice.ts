import { createSlice } from '@reduxjs/toolkit';
import { addToLocalStorage, getFromLocalStorage } from 'localStore';
import { type AuthInterface } from './interface';

const initialState: AuthInterface = {
  idInstance: getFromLocalStorage('idInstance') || null,
  ApiTokenInstance: getFromLocalStorage('apiTokenInstance') || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      addToLocalStorage('idInstance', action.payload.idInstance);
      addToLocalStorage('apiTokenInstance', JSON.stringify(String(action.payload.apiTokenInstance)));

      return {
        ...state,
        idInstance: action.payload.idInstance,
        ApiTokenInstance: action.payload.apiTokenInstance,
      };
    },
    logout: (state) => {
      addToLocalStorage('idInstance', null);
      addToLocalStorage('apiTokenInstance', null);

      return {
        ...state,
        idInstance: null,
        ApiTokenInstance: null,
      }
    }
  },
});

export default authSlice.reducer;

export const { setAuthData, logout } = authSlice.actions;
