import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";

const Card = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  return (
    <div>
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
        <div className=" flex flex-col gap-6">
          <div>
            <img
              src={img}
              width={200}
              height={200}
              alt="shoe"
              className="mx-auto"
            />
            <Link to={`/preview/${id}`}>
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-2 top-2 right-2 rounded-3xl animate-pulse">
                Vizualizează
              </button>
            </Link>
          </div>

          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
            {desc.split(" ").slice(0, 20).join(" ") + "..."}
          </p>

          <div className="flex  items-center justify-between">
            {cart.some((item) => item.id === shoe.id) ? (
              <ActionButton
                slim
                text={"Elimină"}
                onAction={() => remove(shoe.id)}
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
