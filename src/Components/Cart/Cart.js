import React, { Component } from "react";
import { connect } from "react-redux";

import "./Cart.css";
import logo from "./../../images/Wallet.png";
import bus from "./../../images/Bus.png";
import persons from "./../../images/Person.png";
import shirt from "./../../images/goods/shirt.jpg";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          image: shirt,
          title: "Pappy intarsia crewneck sweater",
          size: "s",
          color: "Blue",
          price: "$24.95",
          amount: 2,
        },
        {
          image: shirt,
          title: "Pappy intarsia crewneck sweater",
          size: "s",
          color: "Blue",
          price: "$24.95",
          amount: 2,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="cart-wrapper">
          <div className="cart-left-bar">
            <div className="cart-title">Shopping cart</div>

            {this.state.cartItems.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <div className="cart-item-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-item-details">
                    <p>
                      <span>{item.title}</span>
                    </p>
                    <p className="price">
                      <span>{item.price}</span>
                    </p>
                    <p>
                      Size:<span>{item.size}</span>
                    </p>
                    <p>
                      Color:<span>{item.color}</span>
                    </p>
                  </div>
                  <div className="cart-item-amount">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={1}
                      max={5}
                      defaultValue={1}
                    />
                  </div>
                  <span>{item.price}</span>
                  <div className="cancel">
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
              );
            })}
            <button className="cart-btn-continue">Continue shopping</button>
          </div>

          <div className="cart-details">
            <div className="cart-prices">
              <div className="cart-prices-wrapper">
                <div className="cart-prices-row">
                  <div className="good">2 items</div>
                  <div className="price">$42.95</div>
                </div>
                <div className="cart-prices-row">
                  <div className="good">Shipping</div>
                  <div className="price">$7.00</div>
                </div>
                <div className="cart-prices-row">
                  <div className="good">Taxes</div>
                  <div className="price">$0.00</div>
                </div>
              </div>

              <div className="cart-total">
                <span>Total</span>
                <div className="cart-total-price">$59.95</div>
              </div>

              <button className="btn-checkout">Processed to checkout</button>
            </div>

            <div className="all-features cart-pros">
              <div className="feature-wrapper cart-feature">
                <div className="all-features-item">
                  <img src={logo} alt="" />
                  <p>Discount system</p>
                </div>

                <div className="all-features-item">
                  <img src={bus} alt="" />
                  <p> Free delivery</p>
                </div>

                <div className="all-features-item">
                  <img src={persons} alt="" />
                  <p> Support 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Cart);
