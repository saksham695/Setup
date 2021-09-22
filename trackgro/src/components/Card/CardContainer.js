import React from "react";
import "./CardContainer.css";
export default function CardContainer(props) {
  const { children, customStyle } = props;
  return <div style={customStyle}>{children}</div>;
}
