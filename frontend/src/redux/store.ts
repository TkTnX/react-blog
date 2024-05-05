import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import { postsReducer } from "./slices/posts";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
