import React from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-[90vw] flex flex-wrap h-full justify-start gap-14 mt-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
