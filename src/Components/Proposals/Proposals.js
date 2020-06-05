import React, { Component } from "react";
import "./Proposals.css";
import pic1 from "./../../images/carts/1.png";
import pic2 from "./../../images/carts/2.png";

export class Proposals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [pic1, pic2],
    };
  }
  render() {
    return (
      <div className="proposals">
        <div className="proposals-title">You might also like</div>
        <div className="proposals-cards">
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
        </div>
      </div>
    );
  }
}

export default Proposals;
