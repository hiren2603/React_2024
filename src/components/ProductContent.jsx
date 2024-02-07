import React from "react";
import Rating from "./Rating";

function ProductContent({ product }) {
  const actualPrice = Math.round(
    (product.discountPercentage / 100) * (product.price * 83) +
      product.price * 83
  );
  return (
    <div className=" w-full text-white">
      <div className="flex pl-4">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
      </div>
      <div className="flex space-x-2 p-4">
        <Rating rating={product.rating} />
        <span className="text-gray-400 font-semibold">Ratings</span>
      </div>
      <div className="flex items-end space-x-2 p-4">
        <span className="font-semibold text-2xl">&#8377;</span>
        <h1 className="text-4xl">{product.price * 83}</h1>
        <h2 className="line-through text-lg text-gray-300">
          <span className="text-xl">&#8377;</span>
          {actualPrice}
        </h2>
        <p className="font-semibold text-md space-x-2">
          <span className="text-green-700">{product.discountPercentage}</span> %
          off
        </p>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Brand: </h1>
        <h1>{product.brand}</h1>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Category: </h1>
        <h1 className="capitalize">{product.category}</h1>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Description: </h1>
        <h1>{product.description}</h1>
      </div>
    </div>
  );
}

export default ProductContent;
