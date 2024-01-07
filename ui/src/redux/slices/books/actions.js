import { setBookList, setSelectedBook, setFavouriteBooks } from "./slice";
import { showNotification } from "../toast/slice";
import axiosBooksApi from "../../../utils/axiosBooks";

const fetchBooks = () => async (dispatch) => {
  try {
    const result = await axiosBooksApi.get("/books");
    dispatch(setBookList(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data?.message,
        type: "error",
      })
    );
  }
};

const fetchBookById = (bookId) => async (dispatch) => {
  try {
    const result = await axiosBooksApi.get(`/books/${bookId}`);
    dispatch(setSelectedBook(result.data));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data?.message,
        type: "error",
      })
    );
  }
};

const fetchFavouriteBooks = () => async (dispatch) => {
  try {
    const result = await axiosBooksApi.get("/user/books");
    dispatch(setFavouriteBooks(result.data.books));
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data?.message,
        type: "error",
      })
    );
  }
};

const markBookAsFavourite = (book) => async (dispatch) => {
  try {
    await axiosBooksApi.post(`user/add-favourite/${book.id}`);
    dispatch(
      showNotification({
        message: "Cartea a fost adaugata la favorite!",
        type: "success",
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data?.message,
        type: "error",
      })
    );
  }
};

const removeFavourite = (book) => async (dispatch) => {
  try {
    await axiosBooksApi.delete(`user/remove-favourite/${book.id}`);
    dispatch(
      showNotification({
        message: "Cartea a fost eliminata din favorite!",
        type: "success",
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        message: "API: " + error.response.data?.message,
        type: "error",
      })
    );
  }
};

export default {
  fetchBooks,
  fetchBookById,
  markBookAsFavourite,
  fetchFavouriteBooks,
  removeFavourite,
};
