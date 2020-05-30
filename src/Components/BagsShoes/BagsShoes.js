import React, { Component } from "react";
import "./BagsShoes.css";
import BagsShoesImg from "./../../images/BagsShoes.png";
export class BagsShoes extends Component {
  render() {
    return (
      <section className="bags-shoes">
        <div className="bags-shoes-img">
          <img src={BagsShoesImg} alt="" />
        </div>
        <div className="bags-shoes-text">
          <div className="bags-shoes-title">Bags & Shoes</div>
          <div className="bags-shoes-subtitle">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <button className="bags-shoes-btn">Discovery more</button>
        </div>
      </section>
    );
  }
}

export default BagsShoes;
