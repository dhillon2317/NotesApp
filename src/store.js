// filepath: src/store.js
import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/pasteSlice";

const Store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});

export default Store;
