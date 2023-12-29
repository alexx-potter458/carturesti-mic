import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderActions } from "../redux/store";
import { Texfiled } from "../components/Textfield";
import { ActionButton } from "../components/ActionButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { createOrder } = orderActions;

  const [total, setTotal] = useState(0);
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    dispatch(
      createOrder({
        products: cart,
        address: {
          country,
          county,
          city,
          addressLine: address,
        },
      })
    );
  };

  const goToStore = () => {
    navigate("/store");
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
                  <ActionButton
                    text={"Explorează librăria"}
                    onAction={goToStore}
                  />
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
                  <Texfiled
                    placeholder={"Introdu țară"}
                    type={"text"}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  />
                  <Texfiled
                    placeholder={"Introdu județ"}
                    type={"text"}
                    onChange={(event) => {
                      setCounty(event.target.value);
                    }}
                  />
                  <Texfiled
                    placeholder={"Introdu oraș"}
                    type={"text"}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                  <Texfiled
                    placeholder={"Introdu adresa"}
                    type={"text"}
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
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
