import React from "react";

const SliderProduct = (props) => {
  const { product } = props;

  return (
    <div className="">
      <div className="card rounded-0 slider-product">
        <img
          src={product.image}
          className="card-img-top  img-fluid"
          alt="..."
        />
        <div className="card-body">
          <div className="mx-1 d-flex justify-content-start">
            <h6 className="card-title mt-2">
              {product.name.length <= 30
                ? product.name
                : product.name.slice(0, 35) + "..."}
              Lor
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <h5>{product.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
