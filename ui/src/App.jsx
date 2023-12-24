import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  Explore,
  Signin,
  Preview,
  Signup,
  Home,
  Profile,
} from "./pages/index";

const App = () => {
  const isUserLogged = () => {
    return true;
  };

  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full min-h-screen overflow-x-hidden overflow-y-hidden">
      {isUserLogged() && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/store" element={<Explore />} />
        <Route path="/my-account" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
