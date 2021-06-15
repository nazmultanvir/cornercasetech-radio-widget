import React from "react";
import "./style.css";

//image
import arrowLeft from "../../assets/icons/arrow-left.png";
import shutDown from "../../assets/icons/shutdown.png";

//components
import WidgetButton from "../WidgetButton";

const WidgetContainer = (props) => {
  return (
    <div className="widget-wrapper">
      <div className="widget-header">
        <WidgetButton
          icon={arrowLeft}
          alt="Go Back"
          action={() => props.headBackButton()}
        />
        <div className="headTitleContainer">
          <p className="center">{props.title}</p>
        </div>
        <WidgetButton
          icon={shutDown}
          alt="Close Widget"
          action={() => props.widgetShutdownAction()}
        />
      </div>
      <div className="widget-body">{props.children}</div>
    </div>
  );
};

export default WidgetContainer;
