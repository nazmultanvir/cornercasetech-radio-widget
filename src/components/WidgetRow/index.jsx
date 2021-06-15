import React from "react";
import "./style.css";

const WidgetRow = (props) => {
  return (
    <div>
      <div
        className="rowStyle"
        title={props.alt ? props.alt : "Radio"}
        onClick={() => props.action()}
      >
        <p className="name">{props.data.name}</p>
        <p className="name">{props.data.frequencies}</p>
      </div>
      {props.playing ? (
        <div>
          <p>Playing</p>
        </div>
      ) : null}
    </div>
  );
};

export default WidgetRow;
