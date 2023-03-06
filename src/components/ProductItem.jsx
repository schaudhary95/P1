import React from "react";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <div className="col-md-3">
      <div className="card rounded-0">
        <img src={product.image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-start">
            <span className="badge rounded-0 text-bg-danger mx-1 my-1">
              {product.price}
            </span>
            <span className="text-danger">Top deal</span>
          </div>
          <div className="mx-1 d-flex justify-content-start">
            <h6 className="card-title mt-2">
              {product.name.length <= 30
                ? product.name
                : product.name.slice(0, 35) + "..."}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
