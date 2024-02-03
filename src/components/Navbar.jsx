import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgLogOff } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { auth, logout } = useAuth();
  return (
    <nav className="h-[70px] flex bg-slate-600">
      <div className="container mx-auto w-[90%] flex justify-start items-center px-2">
        <div className="flex-[30%]">
          <h1 className="text-4xl font-bold">ShopVista</h1>
        </div>
        <ul className="flex flex-[60%] justify-start gap-40 text-lg  font-semibold">
          <li className="hover:text-white">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="hover:text-white">
            <a href="">Products</a>
          </li> */}
          <li className="hover:text-white">
            <Link to="/users">Users</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex justify-between w-[5%]">
          <li>
            <Link to="/cart">
              <FaCartShopping className="text-xl hover: text-white" />
            </Link>
          </li>
          {!auth && (
            <li>
              <Link to="/login">
                <FaUser className="text-xl hover: text-white" />
              </Link>
            </li>
          )}
          {auth && (
            <li onClick={logout}>
              <Link to="/login">
                <CgLogOff className="text-xl hover: text-white" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;