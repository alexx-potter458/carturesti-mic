import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../redux/slices/CartSlice";
import { ActionButton } from "../components/ActionButton";

import toast from "react-hot-toast";

const Profile = () => {
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
    toast.success("Order Placed Successfully");
    localStorage.removeItem("localCart");
    dispatch(checkoutCart());
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-between w-full p-20">
            <div className="w-[600px] flex flex-col justify-start">
              <div>
                <h1 className="dark:text-white md:text-5xl font-bold text-slate-500">
                  Contul meu
                </h1>
                <h2 className="mt-2 mb-8 text-xl font-bold text-slate-300 hover:text-slate-500">
                  Olaru Alexandru
                </h2>
              </div>
              <ActionButton text={"Delogare"} />

              <h2 className="mt-16 text-xl font-bold text-slate-300 hover:text-slate-500">
                Favoritele tale
              </h2>
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>

            <div className="w-[600px]">
              <h2 className="mt-2 text-xl font-bold text-slate-300 hover:text-slate-500">
                Comenzile tale
              </h2>
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
