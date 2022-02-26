import { createSlice } from "@reduxjs/toolkit";

const outputSlice = createSlice({
  name: "output",
  initialState: {
    isShowingOutput: false,
    value: "",
  },
  reducers: {
    hideOutput(state) {
      state.isShowingOutput = false;
    },
    showOutput(state, actions) {
      const { outputData } = actions.payload;
      state.value = outputData;
      state.isShowingOutput = true;
    },
  },
});

export default outputSlice;
