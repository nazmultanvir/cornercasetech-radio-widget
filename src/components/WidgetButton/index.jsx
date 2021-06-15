import React from "react";
import "./style.css";

const WidgetButton = (props) => {
  return (
    <button
      className="buttonStyle"
      title={props.alt ? props.alt : "Image"}
      onClick={() => props.action()}
    >
      <img
        className="center"
        src={props.icon}
        alt={props.alt ? props.alt : "Image"}
      />
    </button>
  );
};

export default WidgetButton;
