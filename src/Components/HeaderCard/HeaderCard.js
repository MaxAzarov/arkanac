import React, { Component } from "react";
import "./HeaderCard.css";
export class HeaderCard extends Component {
  render() {
    return (
      <header>
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
                  <div className="cart"></div>
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
        </div>
      </header>
    );
  }
}

export default HeaderCard;
