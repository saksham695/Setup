import React from "react";
import "../../App.css";
function Text({ text, customStyle = {}, customClassName = "text" }) {
  const overrideStyle = customStyle ? customStyle : { color: "black" };
  return (
    <div style={overrideStyle} className={customClassName}>
      {text}
    </div>
  );
}
export default React.memo(Text);
