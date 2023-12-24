import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { ActionButton } from "../components/ActionButton";

const PreviewCard = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const add = () => {
    const shoeInCart = cart.some((item) => item.id === shoe.id);
    if (shoeInCart) {
      toast.error("You've Already Added This Item");
    } else {
      dispatch(addToCart(shoe));
      toast.success("Added to cart");
    }
  };

  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const name = shoe.name;
  const brand = shoe.brand_name;
  const gender = shoe.gender[0];

  return (
    <div className="mt-12">
      <main className="grid place-items-center bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl">
          <img
            src={img}
            alt="shoe"
            className="h-[350px] w-[350px] object-cover"
          />
          <main className="text-gray-500 dark:text-white w-[350px]">
            <small className="uppercase">
              {gender}'s {brand}
            </small>
            <h3 className="uppercase text-black dark:text-white text-2xl font-semibold">
              {name}
            </h3>
            <h3 className="text-2xl font-semibold mb-7 dark:text-white">
              {price} lei
            </h3>
            <small className="text-black  dark:text-white text-sm">
              {desc}
            </small>
            <div className="flex gap-0.5 mt-4">
              <ActionButton text={"Adaugă în coș"} onAction={add} />
              <ActionButton text={"❤️"} />
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default PreviewCard;
