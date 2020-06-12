import React, { Component } from "react";
import "./Features.css";
import logo from "../../images/Wallet.png";
import bus from "../../images/Bus.png";
import persons from "../../images/Person.png";
export class Features extends Component {
  render() {
    return (
      <div className="features">
        <div className="feature">
          <img src={logo} alt="" />
          <p className="feature-title">Discount system</p>
          <p className="feature-text">
            Nam libero tempore, cum soluta nobis est eligendi optio, cumque
            nihil impedit, quo minus id, quod maxime placeat
          </p>
        </div>

        <div className="feature">
          <img src={bus} alt="" />
          <p className="feature-title"> Free delivery</p>
          <p className="feature-text">
            Nam libero tempore, cum soluta nobis est eligendi optio, cumque
            nihil impedit, quo minus id, quod maxime placeat Nam libero tempore,
            cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus
            id, quod maxime placeat
          </p>
        </div>

        <div className="feature">
          <img src={persons} alt="" />
          <p className="feature-title"> Support 24/7</p>
          <p className="feature-text">
            Nam libero tempore, cum soluta nobis est eligendi optio, cumque
            nihil impedit, quo minus id, quod maxime placeat
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
