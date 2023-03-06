import React from "react";
import storeLogo from "../images/storeLogo2.png";
// import amazonLogo from "../images/storeLogo1.png";
import searchIcon from "../images/search.png";
import cartIcon from "../images/cart.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logosandicons">
          <a className="logo">
            <img src={storeLogo} alt="" />
          </a>
        </div>

        <div className="deliverto">
          <span className="deliverToText">Deliver to</span>
          <span className="deliverToRegion">U.S</span>
        </div>

        <div className="search">
          <input type="text" placeholder="Search Products" />
          <button className="btn">
            <img src={searchIcon} alt="" />
          </button>
        </div>

        <div className="navTextItem">
          <span className="upperText">Hello,&nbsp;sign&nbsp;in</span>
          <span className="lowerText">Account&nbsp;&&nbsp;Lists</span>
        </div>

        <div className="navTextItem">
          <span className="upperText">Returns</span>
          <span className="lowerText">&&nbsp;Orders</span>
        </div>

        <a className="icons" id="cart">
          <img src={cartIcon} alt="" />
        </a>
      </nav>

      <div className="subnav">
        <a href="" className="">
          All
        </a>
        <a href="" className="">
          Today's Deals
        </a>
        <a href="" className="">
          Customer Service
        </a>
        <a href="" className="">
          Registry
        </a>
        <a href="" className="">
          Gift Cards
        </a>
        <a href="" className="">
          Sell
        </a>
      </div>
    </div>
  );
};

export default Navbar;
