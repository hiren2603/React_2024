import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[70px] flex bg-slate-600">
      <div className="container mx-auto w-[90%] flex justify-start items-center px-2">
        <div className="flex-[30%]">
          <h1 className="text-4xl font-bold">Fashion Hub</h1>
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
        <ul className="flex justify-end w-[10%]">
          <li>
            <Link to="/login">
              <FaUser className="hover: text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
