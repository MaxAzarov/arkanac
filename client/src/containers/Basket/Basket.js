import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCardsFromBasket,
  deleteCardFromBasket,
} from "./../../actions/basket";

import "./Basket.css";
import logo from "../../images/Wallet.png";
import bus from "../../images/Bus.png";
import persons from "../../images/Person.png";

export class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  async componentDidMount() {
    await this.props.getCardsFromBasket();
  }
  render() {
    return (
      <div className="cart-wrapper">
        <div className="cart-left-bar">
          <div className="cart-title">Shopping cart</div>

          {this.props.basketItems.length !== 0 ? (
            this.props.basketItems.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <div className="cart-item-img">
                    <img
                      src={require("./../../images/carts/" + item.image)}
                      alt=""
                      className="cart-item"
                    />
                  </div>
                  <div className="cart-item-details">
                    <p>
                      <span>{item.title}</span>
                    </p>
                    <p className="price">
                      <span>${item.newPrice}</span>
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
                      defaultValue={this.state.amount}
                      onChange={(e) =>
                        this.setState({ amount: e.target.value })
                      }
                    />
                  </div>
                  <span>{item.price}</span>
                  <div
                    className="cancel"
                    onClick={() => this.props.deleteCardFromBasket(item._id)}
                  >
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Basket is empty!</h1>
          )}
          <Link to="/assortment/Outerwear">
            <button className="cart-btn-continue">Continue shopping</button>
          </Link>
        </div>

        <div className="cart-details">
          <div className="cart-prices">
            <div className="cart-prices-wrapper">
              <div className="cart-prices-row">
                <div className="good">
                  {this.props.basketItems.length} items
                </div>
                <div className="price">${this.props.totalPrice}</div>
              </div>
              <div className="cart-prices-row">
                <div className="good">Shipping</div>
                <div className="price">$0.00</div>
              </div>
              <div className="cart-prices-row">
                <div className="good">Taxes</div>
                <div className="price">$0.00</div>
              </div>
            </div>

            <div className="cart-total">
              <span>Total</span>
              <div className="cart-total-price">${this.props.totalPrice}</div>
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
                <p>Free delivery</p>
              </div>

              <div className="all-features-item">
                <img src={persons} alt="" />
                <p> Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basketItems: state.basket.basket,
    totalPrice: state.basket.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCardsFromBasket: () => dispatch(getCardsFromBasket()),
    deleteCardFromBasket: (id) => dispatch(deleteCardFromBasket(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
