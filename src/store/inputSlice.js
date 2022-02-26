import { createSlice } from "@reduxjs/toolkit";
import { images } from "../scripts/imageLoader";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    hasImg: false,
    imgUrl: "",
  },
  reducers: {
    selectDemo(state, { payload }) {
      const { index } = payload;
      console.log(index);
      state.hasImg = true;
      state.imgUrl = images[`demo${index}`];
    },
  },
});

export default inputSlice;
