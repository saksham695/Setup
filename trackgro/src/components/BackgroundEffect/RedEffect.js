import React from "react";
import backgroundEffect from "../../assets/images/green-effect.png";
export default function RedEffect() {
  return (
    <div style={{ height: 30, width: 30 }}>
      <img
        src={backgroundEffect}
        alt="Logo"
        className="footer-icon-background"
      />
    </div>
  );
}
