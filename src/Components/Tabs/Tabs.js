import React, { Component } from "react";
import "./Tabs.css";

export class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="tab">
          <div className="tab-title">Information</div>
          <div className="tab-title">Description</div>
          <div className="tab-title">Other info</div>
          <div className="tab-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            voluptatibus aperiam soluta rerum minus nobis reiciendis. Non quos
            corporis amet, porro deserunt ut beatae! Asperiores architecto
            tenetur consequatur temporibus quod.
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
