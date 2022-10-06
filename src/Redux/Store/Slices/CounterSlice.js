import { createAction, createReducer } from "@reduxjs/toolkit";

// defining actions
const increment = createAction("increment/counter");
const decrement = createAction("decrement/counter");
const incrementByAmount = createAction("incrementByAmount/counter");

// defining initial state
const initialState = {
  value: 0,
};

// defining reducer

export const CounterSlice = createReducer(initialState, (builder) => {
  // builder takes action as parameter
  builder.addCase(increment, (state, action) => {
    return state.value++;
  });
  builder.addCase(decrement, (state, action) => {
    return state.value--;
  });
  builder.addCase(incrementByAmount, (state, action) => {
    return (state.value = action.payload);
  });
});
