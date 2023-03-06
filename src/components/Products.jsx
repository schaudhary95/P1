import React from "react";
import ProductItem from "./ProductItem";
import AllProducts from "./AllProducts.json";

const Products = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {AllProducts.products.map((prod, i) => {
          return <ProductItem key={i} product={prod} />;
        })}
      </div>
    </div>
  );
};

export default Products;
