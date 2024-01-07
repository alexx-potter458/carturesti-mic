import React, { useEffect } from "react";
import Card from "../components/Card";
import { data } from "../assets/data";
import { bookActions } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Explore = () => {
  const sneakers = data.sneakers;

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  const { fetchBooks } = bookActions;

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {}, [books]);

  return (
    <div className="">
      <div className="w-fit p-8 flex justify-start flex-row gap-8 flex-wrap  mx-auto">
        {books.map((book, idx) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
