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
          action={() => props.headShutdownButton()}
        />
      </div>
      <div className="widget-body">{props.children}</div>
      <div className="widget-footer">
        {props.fmName ? (
          <div>
            <p className="center playingStatus">CURRENTLY PLAYING</p>
            <p className="center fmName">{props.fmName}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WidgetContainer;
