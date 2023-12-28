import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return { ...state, token: action.payload };
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
