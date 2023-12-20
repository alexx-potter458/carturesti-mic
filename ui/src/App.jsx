import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Cart, Explore, Signin, Preview, Signup } from "./pages/index";

const App = () => {
  const isUserLogged = () => {
    return true;
  };

  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full overflow-y-hidden">
      {isUserLogged() && <Navbar />}

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
