import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { setCartFromLocalStorage } from "./slices/cart/slice";
import UserReducer, { setToken } from "./slices/user/slice";
import OrderReducer from "./slices/order/slice";
import ToastReducer from "./slices/toast/slice";
import BookReducer from "./slices/books/slice";
import userActions from "./slices/user/actions";
import orderActions from "./slices/order/actions";
import bookActions from "./slices/books/actions";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    user: UserReducer,
    toast: ToastReducer,
    order: OrderReducer,
    book: BookReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("localCart", JSON.stringify(state.cart));
});

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("localCart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      store.dispatch(setCartFromLocalStorage(parsedCart));
    }
  } catch (error) {
    console.error("Error loading cart from local storage:", error);
  }
};

const loadUserTokenFromLocalStorage = () => {
  try {
    const storedToken = localStorage.getItem("token");
    if (storedToken) store.dispatch(setToken(storedToken));
  } catch (error) {
    console.error("Error loading user token from local storage:", error);
  }
};

const initializeStore = async () => {
  await Promise.all([
    loadCartFromLocalStorage(),
    loadUserTokenFromLocalStorage(),
  ]);
};

initializeStore();

export { userActions, orderActions, bookActions };
export default store;
