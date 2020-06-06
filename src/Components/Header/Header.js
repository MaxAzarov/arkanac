import React, { Component } from "react";
import "./Header.css";
import img from "./../../images/blouses.png";
import classNames from "classnames";
import { Link } from "react-router-dom";

export class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          image: img,
          title: "Pappy intarsia crewneck sweater",
          size: "s",
          color: "Blue",
          price: "$24.95",
          amount: 2,
        },
        {
          image: img,
          title: "Pappy intarsia crewneck sweater",
          size: "s",
          color: "Blue",
          price: "$24.95",
          amount: 2,
        },
      ],
      cartDetails: [
        { name: "shipping", price: "$7.00" },
        { name: "taxes", price: "$0.00" },
        { name: "2 items", price: "$42.95" },
      ],
      headerMenu: [
        "Dresses",
        "Blouses",
        "Tees & Tops",
        "T - Shirts",
        "OuterWear",
        "Pans",
      ],
    };
  }
  render() {
    const header = classNames({
      header: this.props.header,
    });
    return (
      <header className={header}>
        <div className="header-container">
          <div className="header-nav-container">
            <div className="header-nav-wrapper">
              <div className="header-nav">
                <div className="container">
                  <div className="burger"></div>
                  <div className="search-panel"></div>
                </div>
                <Link to="/" className="header-nav__title">
                  Arkanac
                </Link>
                <div className="container">
                  <div className="share"></div>
                  <div className="cart">
                    <div className="goods-in-cart">3</div>
                    <div className="shopping-cart">
                      <p>Shopping Cart</p>
                      {this.state.cartItems.map((item, index) => {
                        return (
                          <div className="shopping-cart__item" key={index}>
                            <div className="shopping-cart__item__img">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="title">
                              <p>{item.title}</p>
                              <p>
                                Size:
                                <span>{item.size}</span>
                              </p>
                              <p>
                                Color:
                                <span>{item.color}</span>
                              </p>
                              <p>
                                {item.price} x {item.amount}
                              </p>
                            </div>
                            <div className="shopping-cart__item__delete">
                              <div className="line"></div>
                              <div className="line"></div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="shopping-cart-details">
                        {this.state.cartDetails.map((item, index) => {
                          return (
                            <div
                              className="shopping-cart-details__row"
                              key={index}
                            >
                              <p>{item.name}</p>
                              <p>{item.price}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="shopping-cart-total">
                        <p>total</p>
                        <p>42.95$</p>
                      </div>

                      <button className="shopping-cart__btn">
                        processed to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-menu">
              {this.state.headerMenu.map((item, index) => {
                return (
                  <div className="header-menu__item" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {this.props.data && (
            <>
              <div className="header-content">
                <div className="header-title">Tees & Tops</div>
                <div className="header-subtitle">
                  Duis aute irure dolor in reprehenderit &shy; in voluptate
                  velit esse
                </div>
                <Link to="/discover" className="header-button">
                  <span> Discover more</span>
                </Link>
              </div>
              <ul className="swiper">
                <li>
                  <div className="swiper-icon active"></div>
                </li>
                <li>
                  <div className="swiper-icon"></div>
                </li>
                <li>
                  <div className="swiper-icon"></div>
                </li>
              </ul>
            </>
          )}
        </div>
      </header>
    );
  }
}

export default HeaderMain;
