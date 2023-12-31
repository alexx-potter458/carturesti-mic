import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionButton } from "../components/ActionButton";
import { userActions, orderActions, bookActions } from "../redux/store";
import OrderCard from "../components/OrderCard";
import FavouriteBookCard from "../components/FavouriteBookCard";

const Profile = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { connectedUser } = useSelector((state) => state.user);
  const { favouriteBooks } = useSelector((state) => state.book);
  const { logout } = userActions;
  const { fetchOrders } = orderActions;
  const { fetchFavouriteBooks } = bookActions;

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchFavouriteBooks());
  }, []);
  useEffect(() => {}, [orders, favouriteBooks]);

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>
        <div className="w-full flex justify-center">
          <div className="flex flex-row justify-center gap-x-6 w-full p-20">
            <div className="w-[600px] flex flex-col justify-start gap-y-4">
              <div>
                <h1 className="dark:text-white md:text-5xl font-bold text-slate-500">
                  Contul meu
                </h1>
                <h2 className="mt-2 mb-8 text-xl font-bold text-slate-300 hover:text-slate-500">
                  {connectedUser?.firstName} {connectedUser?.lastName}
                  <span className="text-sm"> - {connectedUser?.email}</span>
                </h2>
              </div>
              <ActionButton text={"Delogare"} onAction={handleLogout} />

              <h2 className="mt-16 text-xl font-bold text-slate-300 hover:text-slate-500">
                Favoritele tale
              </h2>
              {favouriteBooks.map((book) => (
                <FavouriteBookCard key={book.id} book={book} />
              ))}
            </div>

            <div className="w-[600px] flex flex-col gap-y-4">
              <h2 className="mt-2 text-xl font-bold text-slate-300 hover:text-slate-500">
                Comenzile tale
              </h2>
              {orders.map((order) => (
                <OrderCard key={order.id} item={order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
