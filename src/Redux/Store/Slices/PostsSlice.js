import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "post/list",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = axios.get("https://jsonplaceholder.typicode.com/posts");
      return res;
    } catch (error) {
      return error.response;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
