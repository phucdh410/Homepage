import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  permissions: [],
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermission: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const { setPermission } = permissionSlice.actions;

const persistConfig = {
  key: 'permission',
  version: 1,
  storage,
  whiteList: ['permission'],
};

export default persistReducer(persistConfig, permissionSlice.reducer);
