import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import outputSlice from "./outputSlice";

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    output: outputSlice.reducer,
  },
});

export default store;

export const actions = {
  input: inputSlice.actions,
  output: outputSlice.actions,
};
