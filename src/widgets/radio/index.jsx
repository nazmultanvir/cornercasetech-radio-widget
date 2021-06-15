import React, { Component } from "react";
import "./style.css";

//radio list
import list from "../../Utility/radioList";

//components
import WidgetContainer from "../../components/WidgetContainer";
import WidgetRow from "../../components/WidgetRow";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioList: [],
      selectedStation: null,
      currentlyPlayingFmName: null,
    };
  }
  componentDidMount() {
    this.setState({ radioList: list });
  }
  widgetBackButtonAction = () => {
    console.log("back button");
  };
  widgetShutdownAction = () => {
    let stations = [];
    this.state.radioList.forEach((x) => {
      x.playing = false;
      stations.push(x);
    });
    this.setState({
      selectedStation: null,
      currentlyPlayingFmName: null,
      radioList: stations,
    });
  };
  selectStation = (station) => {
    let stations = [];
    this.state.radioList.forEach((x) => {
      if (x.id === station.id) {
        x.playing = true;
      } else {
        x.playing = false;
      }
      stations.push(x);
    });
    this.setState({
      selectedStation: station.id,
      currentlyPlayingFmName: station.name,
      radioList: stations,
    });
  };
  render() {
    return (
      <WidgetContainer
        title="STATIONS"
        headBackButton={() => this.widgetBackButtonAction()}
        headShutdownButton={() => this.widgetShutdownAction()}
        fmName={this.state.currentlyPlayingFmName}
      >
        {this.state.radioList &&
          this.state.radioList.map((x) => (
            <WidgetRow
              key={x.id}
              data={x}
              action={() => this.selectStation(x)}
            />
          ))}
      </WidgetContainer>
    );
  }
}
