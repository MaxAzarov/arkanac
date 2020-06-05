import React, { Component } from "react";
import "./HeaderMain.css";
import img from "./../../images/blouses.png";

export class HeaderMain extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-nav-container">
            <div className="header-nav-wrapper">
              <div className="header-nav">
                <div className="container">
                  <div className="burger"></div>
                  <div className="search-panel"></div>
                </div>
                <p className="header-nav__title">Arkanac</p>
                <div className="container">
                  <div className="share"></div>
                  <div className="cart">
                    <div className="goods-in-cart">3</div>
                    <div className="shopping-cart">
                      <p>Shopping Cart</p>
                      <div className="shopping-cart__item">
                        <div className="shopping-cart__item__img">
                          <img src={img} alt="" />
                        </div>
                        <div className="title">
                          <p>Pappy intarsia crewneck sweater</p>
                          <p>
                            Size:
                            <span>S</span>
                          </p>
                          <p>
                            Color:
                            <span>Blue</span>
                          </p>
                          <p>$24.95 x 2</p>
                        </div>
                        <div className="shopping-cart__item__delete">
                          <div className="line"></div>
                          <div className="line"></div>
                        </div>
                      </div>
                      <div className="shopping-cart__item">
                        <div className="shopping-cart__item__img">
                          <img src={img} alt="" />
                        </div>
                        <div className="title">
                          <p>Pappy intarsia crewneck sweater</p>
                          <p>
                            Size:
                            <span>S</span>
                          </p>
                          <p>
                            Color:
                            <span>Blue</span>
                          </p>
                          <p>$24.95 x 2</p>
                        </div>
                        <div className="shopping-cart__item__delete">
                          <div className="line"></div>
                          <div className="line"></div>
                        </div>
                      </div>
                      <div className="shopping-cart-details">
                        <div className="shopping-cart-details__row">
                          <p>2 items</p>
                          <p>42.95$</p>
                        </div>
                        <div className="shopping-cart-details__row">
                          <p>Shipping</p>
                          <p>7.00$</p>
                        </div>
                        <div className="shopping-cart-details__row">
                          <p>Taxes</p>
                          <p>0.00$</p>
                        </div>
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
              <div className="header-menu__item">Dresses</div>
              <div className="header-menu__item">Blouses</div>
              <div className="header-menu__item">Tees & Tops</div>
              <div className="header-menu__item">T-Shirts</div>
              <div className="header-menu__item">OuterWear</div>
              <div className="header-menu__item">Pans</div>
            </div>
          </div>
          <div className="header-content">
            <div className="header-title">Tees & Tops</div>
            <div className="header-subtitle">
              Duis aute irure dolor in reprehenderit &shy; in voluptate velit
              esse
            </div>
            <button className="header-button">
              <a href="/discovery">Discover more</a>
            </button>
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
        </div>
      </header>
    );
  }
}

export default HeaderMain;
