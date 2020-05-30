import React, { Component } from "react";
import "./Copyright.css";

export class Copyright extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [1, 2, 3],
      products: ["Prices drop", "New products", "Best sales"],
      information: [
        "Delivery",
        "Legal Notice",
        "Terms and conditions of use",
        "About us",
        "Secure payment",
        "Contact us",
        "Sitemap",
        "Stores",
      ],
      account: ["Adresses", "Credit slips", "Orders", "Personal info"],
    };
  }
  render() {
    return (
      <div className="copyright">
        <div className="copyright-wrapper">
          <div className="subscribe-container">
            <div className="subscribe-title">ARKANAC</div>
            <div className="subscribe-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="subscribe-circles">
              {this.state.circles.map((circle, index) => {
                return (
                  <div className="circle" key={index}>
                    <span>{circle}</span>
                  </div>
                );
              })}
            </div>

            <form action="" className="subscribe">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="subscribe-email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="copyright-products">
            <p>Products</p>
            <ul>
              {this.state.products.map((product, item) => {
                return <li key={item}>{product}</li>;
              })}
            </ul>
          </div>
          <div className="copyright-information">
            <p>Information</p>
            <ul>
              {this.state.information.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="your-account">
            <p>Your account</p>
            <ul>
              {this.state.account.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Copyright;
