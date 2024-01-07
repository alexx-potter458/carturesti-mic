import React, { useEffect } from "react";
import PreviewCard from "../components/PreviewCard";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";
import { bookActions } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Preview = (props) => {
  const { id } = useParams();
  const bookId = Number(id);
  
  const dispatch = useDispatch();
  const { selectedBook } = useSelector((state) => state.book);
  const { fetchBookById } = bookActions;

  useEffect(() => {
    dispatch(fetchBookById(bookId));
  }, []);

  useEffect(() => {}, [selectedBook]);

  return (
    <div className="">
      <PreviewCard book={selectedBook} />
    </div>
  );
};

export default Preview;
