import React, { Component } from "react";
export class HeaderCart extends Component {
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
            <div className="nav-subtitle">
              <p>DRESSES BLOUSES TEES_&_TOPS T-SHIRTS OUTERWEAR PANS</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderCart;
