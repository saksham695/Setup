import React from "react";

import backgroundEffect from "../../assets/images/blue-effect.png";
import "./Background.css";

export default function BlueEffect() {
  return (
    <div style={{ height: 35, width: 40 }}>
      <img src={backgroundEffect} alt="Logo" className="background-effect" />
    </div>
  );
}
