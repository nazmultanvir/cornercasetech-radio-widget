import React, { Component } from "react";
import "./style.css";

//components
import WidgetContainer from "../../components/WidgetContainer";

export default class index extends Component {
  widgetBackButtonAction = () => {
    console.log("back button");
  };
  widgetShutdownAction = () => {
    console.log("widgetShutdownAction button");
  };
  render() {
    return (
      <WidgetContainer
        title="STATIONS"
        headBackButton={() => this.widgetBackButtonAction()}
        headShutdownButton={() => this.widgetShutdownAction()}
      >
        <p>hi</p>
      </WidgetContainer>
    );
  }
}
