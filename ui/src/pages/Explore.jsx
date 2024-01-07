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
      <div className="w-full min-h-fit p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto">
        {books.map((book, idx) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
