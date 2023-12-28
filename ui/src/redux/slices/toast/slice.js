import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const { showNotification } = toastSlice.actions;
export default toastSlice.reducer;
