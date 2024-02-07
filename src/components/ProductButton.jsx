import React from "react";
import { Link } from "react-router-dom";

function ProductButton({ label, link, icon, bgColor }) {
  return (
    <Link
      to={link}
      className={`flex justify-center items-center ${bgColor} p-4 w-full space-x-2`}
    >
      {icon}
      <span className="text-white font-semibold uppercase">{label}</span>
    </Link>
  );
}

export default ProductButton;
