import React from "react";
import Products from "./Products";
import AllDeals from "./AllDeals.json";
import ProductSlider from "./ProductSlider";

const Home = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
        <div className="my-5">
        <ProductSlider />
      </div>

      <div className="my-4 alldeals">
        <ul>
          {AllDeals.allDeals.map((deal, i) => {
            return (
              <li key={i}>
                <img src={deal.image} className="rounded-circle" alt="" />
                <span>{deal.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-5 mx-3">
        <Products />
      </div>
      <hr />
      <div className="bar">
        <p>See personalized recommendation</p>
        <button className="sign">Sign in</button>
        <p>
          New Customer?
          <a href=""> Start here</a>
        </p>
      </div>
      <button className="backtotop" onClick={backToTop}>
        Back to top
      </button>
    </div>
  );
};

export default Home;
