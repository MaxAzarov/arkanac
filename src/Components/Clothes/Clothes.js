import React, { Component } from "react";
import "./Clothes.css";
import dresses from "./../../images/dress.png";
import blouses from "./../../images/blouses.png";
import tshirts from "./../../images/Tshirt.png";
import outerwear from "./../../images/outerwear.png";

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { img: dresses, title: "Dresses" },
        { img: blouses, title: "Blouses" },
        { img: tshirts, title: "T-Shirts" },
        { img: outerwear, title: "Outerwear" },
      ],
    };
  }
  render() {
    return (
      <div className="clothes-wrapper">
        {this.state.images.map((item, index) => {
          return (
            <div className="clothes-item" key={index}>
              <img src={item.img} alt="" />
              <button className="clothes-button">{item.title}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Clothes;
