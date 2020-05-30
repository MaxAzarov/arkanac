import React, { Component } from "react";
import "./TradeMark.css";
import sisley from "./../../images/logos/Logo_11.png";
import wrangler from "./../../images/logos/Logo_15.png";
import fredPerry from "./../../images/logos/Logo_16.png";
import levis from "./../../images/logos/Logo_4.png";
import jackjones from "./../../images/logos/Logo_5.png";
import lacoste from "./../../images/logos/Logo_6.png";

export class TradeMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [sisley, wrangler, fredPerry, levis, jackjones, lacoste],
    };
  }
  render() {
    return (
      <div className="trademark">
        {this.state.images.map((img, index) => {
          return <img src={img} alt="" key={index} />;
        })}
      </div>
    );
  }
}

export default TradeMark;
