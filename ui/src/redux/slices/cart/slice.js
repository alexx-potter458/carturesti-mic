import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      return [...state, ...action.payload];
    },
    checkoutCart: (state, action) => {
      return [];
    },
    addToCart: (state, action) => {
      return [...state, { ...action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action) => {
      return state.filter((book) => action.payload !== book.id);
    },
    increaseQty: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, quantity: book.quantity + 1 }
          : book
      );
    },
    decreaseQty: (state, action) => {
      console.log(action.payload);
      return state.map((book) =>
        book.id === action.payload && book.quantity > 1
          ? { ...book, quantity: book.quantity - 1 }
          : book
      );
    },
  },
});

export const {
  setCartFromLocalStorage,
  checkoutCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = CartSlice.actions;
export default CartSlice.reducer;
