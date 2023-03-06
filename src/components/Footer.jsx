import React from "react";
import storeLogo from "../images/storeLogo2.png";

const Footer = () => {
  return (
    <div>
      <div className="subfooter">
        <img src={storeLogo} alt="" />
        <select name="language" id="language">
          <option value="">&#127760; English - EN</option>
          <option value="">&#127760; espanol - ES</option>
          <option value="">&#127760; Deutsch - DE</option>
        </select>
      </div>
      <footer>
        <div>
          <a href="">Conditions of Use of Sale</a>
          <a href="">Privacy Notice</a>
          <a href="">Your Ads Privacy Choices</a>
          &copy; 1996-2022, AppStore.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
};

export default Footer;
