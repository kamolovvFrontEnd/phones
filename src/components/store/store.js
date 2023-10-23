import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer.js";

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});
