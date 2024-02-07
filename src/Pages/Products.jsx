import { Fragment, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Product, ProductFilter } from "../components";
import { fetchProductsByCategory, fetchProducts } from "../api";

function Products() {
  const data = useLoaderData();
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProductsByCategory = async (category) => {
    if (category) {
      const products = await fetchProductsByCategory(category);
      console.log(products.products);
      setProducts(products.products);
    } else {
      const products = await fetchProducts();
      console.log(products.products);
      setProducts(products.products);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between pt-2 pb-2">
        <ProductFilter
          selectedCategory={selectedCategory}
          onSetSelectedCategory={setSelectedCategory}
          getProductsByCategory={getProductsByCategory}
        />
      </div>
      {products.map((product) => (
        <Fragment key={product.id}>
          <Product product={product} />
        </Fragment>
      ))}
    </>
  );
}

export default Products;
