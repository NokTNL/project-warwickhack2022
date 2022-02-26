import { createSlice } from "@reduxjs/toolkit";
import { images } from "../scripts/imageLoader";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    hasImg: false,
    imgUrl: "",
  },
  reducers: {
    uploadFile(state, { payload }) {
      const { url } = payload;
      state.hasImg = true;
      state.imgUrl = url;
    },

    selectDemo(state, { payload }) {
      const { index } = payload;
      state.hasImg = true;
      state.imgUrl = images[`demo${index}`];
    },
  },
});

export default inputSlice;
