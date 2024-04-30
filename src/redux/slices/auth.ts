import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const isAuthSelector = (state: RootState) => state.auth.isAuth;

export const { changeIsAuth } = authSlice.actions;

export default authSlice.reducer;
