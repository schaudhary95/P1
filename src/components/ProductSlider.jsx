import React, { useEffect } from "react";
import SliderProduct from "./SliderProduct";
import AllProducts from "./AllProducts.json";

const ProductSlider = () => {
  let box;
  let width;

  useEffect(() => {
    box = document.querySelector(".product-container");
    width = box.clientWidth;
  }, []);

  const btnpressprev = () => {
    box.scrollLeft = box.scrollLeft - width;
  };

  const btnpressnext = () => {
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="product-slider">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container">
        {AllProducts.products.map((prod, i) => {
          return <SliderProduct key={i} product={prod} />;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
