import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cart/slice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import shelf from "../assets/book.png";

const Card = ({ book }) => {
  const cart = useSelector((state) => state.cart);
  const price = book.price;
  const desc = book.title;
  const id = book.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(book));
    toast.success("Am adăugat pe card!");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Am eliminat produsul!");
  };

  return (
    <div>
      <div className="w-[300px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
        <div className=" flex flex-col gap-6">
          <div>
            <img
              src={shelf}
              width={200}
              height={200}
              alt="book"
              className="mx-auto mt-8"
            />
            <Link to={`/preview/${id}`}>
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-2 top-2 right-2 rounded-3xl animate-pulse">
                Vizualizează
              </button>
            </Link>
          </div>

          <p className="text-base text-md overflow-y-hidden h-12">
            {book.title.split(" ").slice(0, 10).join(" ") +
              (book.title.split(" ").length > 10 ? "..." : "")}
          </p>
          <p className="text-s">Stoc: {book.quantity} buc.</p>

          <div className="flex  items-center justify-between">
            {cart.some((item) => item.id === book.id) ? (
              <ActionButton
                slim
                text={"Elimină"}
                onAction={() => remove(book.id)}
              />
            ) : (
              <ActionButton slim text={"Adaugă"} onAction={add} />
            )}
            <span className="text-xl font-semibold">{price} lei</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
