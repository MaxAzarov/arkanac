import React, { Component } from "react";

import pic1 from "./../../images/carts/1.png";
import pic2 from "./../../images/carts/2.png";
import pic3 from "./../../images/carts/3.png";
import pic4 from "./../../images/carts/4.png";
import pic5 from "./../../images/carts/5.png";
import pic6 from "./../../images/carts/6.png";
import pic7 from "./../../images/carts/7.png";
import pic8 from "./../../images/carts/8.png";
import pic9 from "./../../images/carts/9.png";
import pic10 from "./../../images/carts/10.png";
import "./Cards.css";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10],
    };
  }
  render() {
    return (
      <div className="trending-cards">
        {this.state.cards.map((item, index) => {
          return (
            <div className="trending-card" key={index}>
              <div className="card-image">
                <img src={item} alt="" />
                <div className="card-details">
                  <button className="quick-view">quick view</button>
                  <button className="details">more details</button>
                </div>
              </div>
              <div className="card-state">New</div>
              <div className="card-discount">-20%</div>
              <div className="card-title">
                Excepteur sint occaecat cupidatat
              </div>
              <div className="card-prices">
                <div className="card-price">$ 199.00</div>
                <div className="card-old-price">$ 299.00</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
