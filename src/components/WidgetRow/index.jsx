import React from "react";
import "./style.css";

import addCircle from "../../assets/icons/plus-add.png";
import mCircle from "../../assets/icons/m-add.png";

//components
import WidgetButton from "../WidgetButton";

const WidgetRow = (props) => {
  return (
    <div>
      <div
        className="rowStyle"
        title={props.alt ? props.alt : "Radio"}
        onClick={() => props.action()}
      >
        {props.data.playing ? (
          <div className="fade-in-div playingStationDiv rowSpaceBetween">
            <WidgetButton
              icon={addCircle}
              alt="Go Back"
              action={() => props.headBackButton()}
            />
            <div className="stationLogoWrapper fade-in-img center">
              <img className="center " src={props.data.logo} />
            </div>
            <WidgetButton
              icon={mCircle}
              alt="Go Back"
              action={() => props.headBackButton()}
            />
          </div>
        ) : null}
        <div className="rowSpaceBetween">
          <p className="name">{props.data.name}</p>
          <p className="name">{props.data.frequencies}</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetRow;
