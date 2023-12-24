import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../redux/slices/CartSlice";
import { Texfiled } from "../components/Textfield";
import { ActionButton } from "../components/ActionButton";

import toast from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    toast.success("Comanda a fost realizată cu succes");
    localStorage.removeItem("localCart");
    dispatch(checkoutCart());
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-between w-full p-20 gap-x-6">
            <div className="flex flex-col gap-y-10">
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>

            {cart.length === 0 ? (
              <div className="min-w-[320px] md:min-w-[1280px]  flex justify-center">
                <div className="flex flex-col justify-around  gap-y-10">
                  <div className="">
                    <h1 className="text-4xl dark:text-white md:text-6xl font-semibold">
                      Coșul este gol
                    </h1>
                  </div>
                  <ActionButton text={"Explorează librăria"} />
                </div>
              </div>
            ) : (
              <div className="w-[600px] flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-xl md:text-4xl font-bold text-slate-300 hover:text-slate-500">
                    Număr total cărți : {cart.length}
                  </h1>
                  <h1 className="text-xl dark:text-white md:text-3xl font-bold text-slate-500">
                    Preț total : {total} lei
                  </h1>
                </div>
                <div className="flex flex-col gap-3 w-full bg-[#1f1b24] p-8 rounded-3xl">
                  <h1 className="text-slate-50 text-2xl font-bold">Adresa</h1>
                  <Texfiled placeholder={"Introdu țară"} type={"text"} />
                  <Texfiled placeholder={"Introdu județ"} type={"text"} />
                  <Texfiled placeholder={"Introdu oraș"} type={"text"} />
                  <Texfiled placeholder={"Introdu adresa"} type={"text"} />
                  <div className="my-1"></div>
                </div>
                <ActionButton onAction={checkout} text={"Trimite comanda"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
