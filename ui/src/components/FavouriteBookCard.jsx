import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { useDispatch } from "react-redux";
import { bookActions } from "../redux/store";

import React from "react";

const FavouriteBookCard = ({ book }) => {
  const { removeFavourite, fetchFavouriteBooks } = bookActions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToPreviewBook = (id) => {
    navigate(`/preview/${id}`);
  };

  const handleRemoveFavourite = () => {
    dispatch(removeFavourite(book));
    dispatch(fetchFavouriteBooks());
  };

  return (
    <div className=" text-white p-6  w-[600px] bg-slate-100 dark:bg-[#1f1b24] dark:hover:bg-[#121015] rounded-2xl hover:shadow-lg flex justify-between">
      <div
        onClick={() => goToPreviewBook(book.id)}
        className="text-md hover:bg-black my-2 bg-slate-800 p-4 rounded-2xl flex flex-row justify-between books-center"
      >
        <div>Book: {book.title}</div>
      </div>
      <div className="p-2">
        <ActionButton onAction={() => handleRemoveFavourite()} text={"💔"} />
      </div>
    </div>
  );
};

export default FavouriteBookCard;
