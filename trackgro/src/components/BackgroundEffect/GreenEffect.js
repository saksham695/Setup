import React from "react";
import backgroundEffect from "../../assets/images/green-effect.png";
import "./Background.css";
export default function GreenEffect() {
  return (
    <div style={{ height: 30, width: 30 }}>
      <img src={backgroundEffect} alt="Logo" className="background-effect" />
    </div>
  );
}
