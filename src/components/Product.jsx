import React from "react";
import { useProducts } from "../context";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="w-[300px] min-h-max bg-gray-600 rounded-lg px-2 py-2 text-white shadow-lg shadow-black">
      <img src={product.thumbnail} className="rounded-lg h-[200px] w-full" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="truncate ...">{product.description}</p>
      {/* <p>{product.category}</p> */}
      <h1 className="text-2xl font-bold">${product.price}</h1>
      <div className="pb-4">
        <Rating rating={product.rating} />
      </div>
    </div>
  );
}

export default Product;
