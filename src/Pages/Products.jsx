import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import { Product } from "../components";

function Products() {
  const products = useLoaderData();
  return (
    <div className="container mx-auto w-[90%] flex flex-wrap h-full justify-center gap-12 mt-5">
      {products.products.map((product) => (
        <Fragment key={product.id}>
          <Product product={product} />
        </Fragment>
      ))}
    </div>
  );
}

export default Products;
