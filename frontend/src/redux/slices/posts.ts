import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { RootState } from "../store";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");

  return data;
});

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get("/tags");

  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
    //   получение постов
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.status = "loading";
      state.posts.items = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.status = "loaded";
      state.posts.items = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.status = "error";
      state.posts.items = [];
    });
        // получение
    builder.addCase(fetchTags.pending, (state) => {
      state.tags.status = "loading";
      state.tags.items = [];
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags.status = "loaded";
      state.tags.items = action.payload;
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.tags.status = "error";
      state.tags.items = [];
    });
  },
});


export const postsReducer = postsSlice.reducer;
