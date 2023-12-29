import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderList: (state, action) => {
      return { ...state, orders: action.payload };
    },
  },
});

export const { setOrderList } = orderSlice.actions;
export default orderSlice.reducer;
