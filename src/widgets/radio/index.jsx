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
      currentlyPlayingFmName: "Radio AMAR",
    };
  }
  componentDidMount() {
    this.setState({ radioList: list });
    console.log(list);
  }
  widgetBackButtonAction = () => {
    console.log("back button");
  };
  widgetShutdownAction = () => {
    console.log("widgetShutdownAction button");
  };
  selectStation = (station) => {
    console.log(station);
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

{
  /* <div key={x.id}>
<p>
  {x.name} - {x.frequencies}
</p>
</div> */
}
