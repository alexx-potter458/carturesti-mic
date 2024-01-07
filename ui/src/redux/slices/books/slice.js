import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: null,
  favouriteBooks: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookList: (state, action) => {
      return { ...state, books: action.payload };
    },
    setSelectedBook: (state, action) => {
      return { ...state, selectedBook: action.payload };
    },
    setFavouriteBooks: (state, action) => {
      return { ...state, favouriteBooks: action.payload };
    },
  },
});

export const { setBookList, setSelectedBook, setFavouriteBooks } =
  bookSlice.actions;
export default bookSlice.reducer;
