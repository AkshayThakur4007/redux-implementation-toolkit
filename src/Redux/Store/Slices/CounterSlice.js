import { createAction, createReducer } from "@reduxjs/toolkit";

// defining actions
export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const incrementByAmount = createAction("incrementByAmount/counter");

// defining initial state
const initialState = {
  value: 0,
};

// defining reducer

export const CounterSlice = createReducer(initialState, (builder) => {
  // builder takes action as parameter
  builder.addCase(increment, (state, action) => {
     state.value++;
  });
  builder.addCase(decrement, (state, action) => {
     state.value--;
  });
  builder.addCase(incrementByAmount, (state, action) => {
    (state.value += action.payload);
  });
});
