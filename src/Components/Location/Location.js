import React, { Component } from "react";
import Map from "./../../images/instagram/Map.png";
import "./Location.css";

export class Location extends Component {
  render() {
    return (
      <div className="map-wrapper">
        <div className="map-info">
          <div className="map-info-location">
            Alterego, 1 Infinite Loop, Cupertino, CA 95014
          </div>
          <div className="map-info-tel">8 - 800 - 2000 - 3000</div>
          <div className="map-info-post">demo@demo.com</div>
          <div className="map-info-work">Mon. - Sun: 09:00 - 19:00</div>
        </div>
        <img src={Map} alt="" />
      </div>
    );
  }
}

export default Location;
