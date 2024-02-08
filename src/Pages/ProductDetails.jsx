import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BagIcon, CartIcon } from "../assets/icons";
import { ProductButton, ProductContent, ProductImage } from "../components";

function ProductDetails() {
  const product = useLoaderData();
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  console.log(product);

  return (
    <div className="flex flex-row gap-4 justify-start h-full mt-2 rounded p-2">
      <div className="w-full">
        <div className="flex w-full h-full bg-white ">
          <ProductImage
            images={product.images}
            current={currentImage}
            onSetCurrent={setCurrentImage}
          />
        </div>
      </div>
      <ProductContent product={product} />
    </div>
  );
}

export default ProductDetails;
