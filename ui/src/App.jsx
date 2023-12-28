import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Cart,
  Explore,
  Signin,
  Preview,
  Signup,
  Home,
  Profile,
} from "./pages/index";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);

  const isUserLogged = () => {
    return !!user.token;
  };

  const RedirectToHome = () => <Navigate to="/" replace />;
  const RedirectToSignin = () => <Navigate to="/signin" replace />;

  return (
    <div className="h-full overflow-x-hidden">
      {isUserLogged() && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={isUserLogged() ? <RedirectToHome /> : <Signin />}
        />
        <Route
          path="/signup"
          element={isUserLogged() ? <RedirectToHome /> : <Signup />}
        />
        <Route
          path="/store"
          element={isUserLogged() ? <Explore /> : <RedirectToSignin />}
        />
        <Route
          path="/my-account"
          element={isUserLogged() ? <Profile /> : <RedirectToSignin />}
        />
        <Route
          path="/cart"
          element={isUserLogged() ? <Cart /> : <RedirectToSignin />}
        />
        <Route
          path="/preview/:id"
          element={isUserLogged() ? <Preview /> : <RedirectToSignin />}
        />
      </Routes>
    </div>
  );
};

export default App;
