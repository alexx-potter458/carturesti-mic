import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cart/slice";
import { bookActions } from "../redux/store";
import toast from "react-hot-toast";
import { ActionButton } from "../components/ActionButton";
import shelf from "../assets/book.png";

const PreviewCard = ({ book }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { markBookAsFavourite } = bookActions;

  const add = () => {
    const bookInCart = cart.some((item) => item.id === book.id);
    if (bookInCart) {
      toast.error("Ai adăugat deja acest produs");
    } else {
      dispatch(addToCart(book));
      toast.success("Am adaugat produsul!");
    }
  };

  const markFavourite = () => {
    dispatch(markBookAsFavourite(book));
  };

  const price = book?.price;
  const name = book?.title;
  const genre = book?.genre;

  return (
    <div className="mt-12">
      <main className="grid place-items-center bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl">
          <img
            src={shelf}
            alt="book"
            className="h-[350px] w-[350px] object-cover"
          />
          <main className="text-gray-500 dark:text-white w-[350px]">
            <small className="uppercase">{genre?.name}</small>
            <h3 className="uppercase text-black dark:text-white text-2xl font-semibold">
              {name}
            </h3>
            <h3 className="text-2xl font-semibold mb-7 dark:text-white">
              {price} lei
            </h3>
            <div className="flex gap-0.5 mt-4">
              <ActionButton text={"Adaugă în coș"} onAction={add} />
              <ActionButton text={"❤️"} onAction={markFavourite} />
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default PreviewCard;
