import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white p-4 flex justify-between gap-4">
        <Link to="/" className="font-bold text-2xl">🛍️ZomatoMall</Link>
        <div className="flex  items-center gap-6">
        <Link to="/product">Products</Link>
        <Link to="/addseller">Add Seller</Link>
        <Link to="/login">Login/Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
