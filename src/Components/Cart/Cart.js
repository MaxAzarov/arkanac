import React, { Component } from "react";
import "./Cart.css";
import HeaderCard from "./../HeaderCard/HeaderCard";
import logo from "./../../images/Wallet.png";
import bus from "./../../images/Bus.png";
import persons from "./../../images/Person.png";
import shirt from "./../../images/goods/shirt.jpg";

export class Cart extends Component {
  render() {
    return (
      <>
        <HeaderCard></HeaderCard>
        <div className="cart-wrapper">
          <div className="cart-left-bar">
            <div className="cart-title">Shopping cart</div>
            <div className="cart-item">
              <div className="cart-item-img">
                <img src={shirt} alt="" />
              </div>
              <div className="cart-item-details">
                <p>
                  <span>Flowy embroidered shift dress</span>
                </p>
                <p className="price">
                  <span>$59.95</span>
                </p>
                <p>
                  Size:<span>S</span>
                </p>
                <p>
                  Color:<span>Blue</span>
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
              <span>$59.95</span>
              <div className="cancel">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>

            <div className="cart-item">
              <div className="cart-item-img">
                <img src={shirt} alt="" />
              </div>
              <div className="cart-item-details">
                <p>
                  <span>Flowy embroidered shift dress</span>
                </p>
                <p className="price">
                  <span>$59.95</span>
                </p>
                <p>
                  Size:<span>S</span>
                </p>
                <p>
                  Color:<span>Blue</span>
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
              <span>$59.95</span>
              <div className="cancel">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>

            <div className="cart-item">
              <div className="cart-item-img">
                <img src={shirt} alt="" />
              </div>
              <div className="cart-item-details">
                <p>
                  <span>Flowy embroidered shift dress</span>
                </p>
                <p className="price">
                  <span>$59.95</span>
                </p>
                <p>
                  Size:<span>S</span>
                </p>
                <p>
                  Color:<span>Blue</span>
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
              <span>$59.95</span>
              <div className="cancel">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
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

export default Cart;
