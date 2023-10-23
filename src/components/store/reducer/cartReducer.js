import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    iphoneCards: [],
    samsungCards: [],
    cart: []
  },
  reducers: {
    setIphoneCards(state, action) {
      state.iphoneCards = action.payload;
    },
    setSamsungCards(state, action) {
      state.samsungCards = action.payload;
    },
    add(state, action) {
      state.cart = [...state.cart, ...state.iphoneCards.filter((e) => e.price === action.payload)]
      state.cart = [...state.cart, ...state.samsungCards.filter((e) => e.price === action.payload)]
    },
    remove(state, action) {
      state.cart = state.cart.filter((e) => e.price !== action.payload)
    }
  },
});

export const { setIphoneCards, setSamsungCards, add, remove } = cartReducer.actions;
export default cartReducer.reducer;
