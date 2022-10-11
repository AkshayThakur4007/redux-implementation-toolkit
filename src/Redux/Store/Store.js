import { configureStore } from "@reduxjs/toolkit";
// import { CounterSlice } from "./Slices/CounterSlice";
import PostsReducer from "./Slices/PostsSlice";

export const store = configureStore({
  reducer: {
    // counter: CounterSlice,
    post: PostsReducer,
  },
});
