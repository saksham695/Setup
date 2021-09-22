import React from "react";
import "./Icon.css";
export default function Icon({ name, customClassName }) {
  return (
    <div>
      <img src={name} alt="Logo" className={customClassName} />
    </div>
  );
}
