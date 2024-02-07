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
      <div className="w-[40vw]">
        <div className="flex w-full h-[500px] bg-white">
          <ProductImage
            images={product.images}
            current={currentImage}
            onSetCurrent={setCurrentImage}
          />
        </div>
        <div className="flex w-full gap-2 pt-3">
          <ProductButton
            label="Add To Cart"
            link="/cart"
            icon={<CartIcon />}
            bgColor="bg-blue-500 hover:bg-blue-600"
          />
          <ProductButton
            label="Buy Now"
            link="/"
            icon={<BagIcon />}
            bgColor="bg-orange-600 hover:bg-orange-700"
          />
        </div>
      </div>
      <ProductContent product={product} />
    </div>
  );
}

export default ProductDetails;
