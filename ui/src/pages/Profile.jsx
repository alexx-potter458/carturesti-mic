import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { ActionButton } from "../components/ActionButton";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/store";

const Profile = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleLogout = async () => {
    dispatch(userActions.logout());
  };

  return (
    <div>
      <div>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-between w-full p-20">
            <div className="w-[600px] flex flex-col justify-start gap-y-4">
              <div>
                <h1 className="dark:text-white md:text-5xl font-bold text-slate-500">
                  Contul meu
                </h1>
                <h2 className="mt-2 mb-8 text-xl font-bold text-slate-300 hover:text-slate-500">
                  Olaru Alexandru
                </h2>
              </div>
              <ActionButton text={"Delogare"} onAction={handleLogout} />

              <h2 className="mt-16 text-xl font-bold text-slate-300 hover:text-slate-500">
                Favoritele tale
              </h2>
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>

            <div className="w-[600px] flex flex-col gap-y-4">
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
