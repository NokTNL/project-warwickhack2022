import { createSlice } from "@reduxjs/toolkit";
import { images } from "../scripts/imageLoader";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    hasImg: false,
    imgUrl: "",
    key: "",
    // for demo & debug
    isUsingDemo: false,
  },
  reducers: {
    inputKey(state, { payload }) {
      const { key } = payload;
      state.key = key;
    },
    uploadFile(state, { payload }) {
      const { url } = payload;
      state.isUsingDemo = false;
      state.hasImg = true;
      state.imgUrl = url;
    },

    selectDemo(state, { payload }) {
      const { index } = payload;
      state.isUsingDemo = true;
      state.hasImg = true;
      state.imgUrl = images[`demo${index}`];
    },
  },
});

export default inputSlice;
