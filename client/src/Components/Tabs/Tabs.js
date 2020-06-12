import React, { Component } from "react";
import "./Tabs.css";

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          name: "Information",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosamvoluptatibus aperiam soluta rerum minus nobis reiciendis. Non quoscorporis amet, porro deserunt ut beatae! Asperiores architecto tenetur consequatur temporibus quod.",
        },
        {
          name: "Description",
          info: "Lorem ipsum dolor, sit amet consectetureiciendi",
        },
        {
          name: "Other info",
          info:
            "Lorem ipsum dolor, obis reiciendis. Non quoscorporis amet, porro deserunt ut beatae! Asperiores architecto tenetur consequatur temporibus quod.",
        },
      ],
      tabinfo:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosamvoluptatibus aperiam soluta rerum minus nobis reiciendis. Non quoscorporis amet, porro deserunt ut beatae! Asperiores architecto tenetur consequatur temporibus quod.",
    };
  }

  render() {
    return (
      <div className="tabs">
        <div className="tab">
          {this.state.tabs.map((tab, index) => {
            return (
              <div
                className="tab-title"
                key={index}
                onClick={() =>
                  this.setState({
                    tabinfo: tab.info,
                  })
                }
              >
                {tab.name}
              </div>
            );
          })}
          <div className="tab-info">{this.state.tabinfo}</div>
        </div>
      </div>
    );
  }
}

export default Tabs;
