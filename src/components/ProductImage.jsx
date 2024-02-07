import React from "react";
import ProductButton from "./ProductButton";
import { BagIcon, CartIcon } from "../assets/icons";

function ProductImage({ images, current, onSetCurrent }) {
  return (
    <>
      <div className="flex-[15%] flex flex-col gap-2 justify-start p-2 rounded">
        {images.map((item) => (
          <div
            key={item}
            className="p-2 min-h-16 w-full cursor-pointer border-2 rounded hover:border-2 hover:border-blue-700"
            onMouseOver={() => onSetCurrent(item)}
          >
            <img src={item} className="h-full w-auto rounded" />
          </div>
        ))}
      </div>
      <div className="flex-[85%] w-fit items-start justify-start shadow-gray-700 rounded">
        <img
          src={current}
          alt="current  "
          className="h-full w-full object-contain "
        />
      </div>
    </>
  );
}

export default ProductImage;
