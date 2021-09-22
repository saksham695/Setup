import React from "react";

import Text from "../SharedText/Text";
import logo from "../../assets/icons/header-left.png";
import hamburg from "../../assets/icons/hamburg.png";

import "../../App.css";

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="Logo" className="header-left-icon" />
      </div>
      <div className="header-text">
        <Text text={"trackagro.com"} />
      </div>
      <div>
        <img src={hamburg} alt="Logo" className="header-right-icon" />
      </div>
    </div>
  );
}
