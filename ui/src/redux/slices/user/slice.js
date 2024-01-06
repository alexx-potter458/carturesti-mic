import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  connectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    setUser: (state, action) => {
      return { ...state, connectedUser: action.payload };
    },
  },
});

export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;
