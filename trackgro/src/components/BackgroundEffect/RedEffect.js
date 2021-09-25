import React from "react";
import backgroundEffect from "../../assets/images/red-effect.png";
export default function RedEffect() {
  return (
    <div style={{ height: 30, width: 30 }}>
      <img src={backgroundEffect} alt="Logo" className="background-effect" />
    </div>
  );
}
