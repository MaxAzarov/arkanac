import React, { Component } from "react";
import "./Footer.css";

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
      email: "",
    };
  }

  SendEmailHandler = async (e) => {
    e.preventDefault();
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: this.state.email }),
    });
  };

  render() {
    return (
      <div className="copyright">
        <div className="copyright-wrapper">
          <div className="footer-container">
            <div className="footer-title">ARKANAC</div>
            <div className="footer-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="footer-circles">
              {this.state.circles.map((circle, index) => {
                return (
                  <div className="circle" key={index}>
                    <span>{circle}</span>
                  </div>
                );
              })}
            </div>

            <form
              action=""
              className="subscribe"
              onSubmit={this.SendEmailHandler}
            >
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="footer-email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
