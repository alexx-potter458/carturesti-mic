import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/cart/slice";
import toast from "react-hot-toast";
import shelf from "../assets/book.png";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Am eliminat produsul!");
  };

  const increase = (id) => {
    dispatch(increaseQty(id));
  };

  const decrease = (id) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(id));
    } else dispatch(decreaseQty(id));
  };

  return (
    <div>
      <div className=" w-[600px] bg-slate-100 dark:bg-[#1f1b24] dark:hover:bg-[#121015] rounded-2xl hover:shadow-lg">
        <div className="p-4">
          <div>
            <img src={shelf} alt="" width={150} height={150} />
          </div>
          <div className="flex  justify-between dark:text-white">
            <div className="flex flex-col mx-[20px] gap-y-2 overflow-y-hidden  w-full">
              <div className="text-xs font-bold tracking-normal mr-1 md:text-xl sm:block">
                {item.title}
              </div>

              <div className="flex justify-between gap-x-8 mt-2 items-center w-full">
                <div className="font-bold">Preț: {item.price} lei</div>
                <div>
                  <div className="flex gap-x-6">
                    <p className="flex items-center">
                      <button
                        className="p-1 mr-2 bg-[#dadada] dark:bg-[#2a2a2a] dark:hover:bg-black dark:border-none border rounded-lg font-bold w-[30px]"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{item.quantity}</span>
                      <button
                        className="p-1 ml-2 bg-[#dadada] dark:bg-[#2a2a2a] dark:hover:bg-black dark:border-none border rounded-lg font-bold w-[30px]"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                    </p>
                    <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 ml-2">
                      <AiFillDelete onClick={() => remove(item.id)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
