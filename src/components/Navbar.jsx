import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgLogOff } from "react-icons/cg";
import { CartIcon, UserIcon } from "../assets/icons";
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
          <li className="hover:text-white">
            <Link to="/users">Users</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center w-[7%]">
          <li>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
          {auth ? (
            <li onClick={logout}>
              <Link to="/">
                <CgLogOff className="text-xl hover: text-white" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <UserIcon />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
