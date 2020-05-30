import React, { Component } from "react";
import "./HeaderMain.css";

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
                  <div className="cart"></div>
                </div>
              </div>
            </div>
            <div className="nav-subtitle">
              <p>DRESSES BLOUSES TEES_&_TOPS T-SHIRTS OUTERWEAR PANS</p>
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
