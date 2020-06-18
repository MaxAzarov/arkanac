import React, { Component } from "react";
import classNames from "classnames";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
import {
  deleteCardFromBasket,
  getCardsFromBasket,
  CountTotalPrice,
} from "../../actions/basket";

export class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMenu: ["Dresses", "Blouses", "T-Shirts", "OuterWear"],
      catalog: false,
      input: false,
      share: false,
    };
  }
  async componentDidMount() {
    await this.props.getCardsFromBasket();
    this.props.countTotalPrice();
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
                  <div
                    className="burger"
                    onClick={() =>
                      this.setState({ catalog: !this.state.catalog })
                    }
                  >
                    <div
                      className={
                        this.state.catalog
                          ? "all-goods-wrapper"
                          : "unActiveCatalog"
                      }
                    >
                      <div className="all-goods-wrapper__item">
                        <p>T-Shirts & Blouses</p>
                        <ul>
                          <li>Blouses</li>
                          <li>Shirts</li>
                          <li>T-Shirts</li>
                        </ul>
                      </div>
                      <div className="all-goods-wrapper__item">
                        <p>OuterWear</p>
                        <ul>
                          <li>Coats</li>
                          <li>Hoddies_&_Pullovers</li>
                          <li>Jackets</li>
                        </ul>
                      </div>
                      <div className="all-goods-wrapper__item">
                        <p>Warm Clothes</p>
                        <ul>
                          <li>Blouses</li>
                          <li>Shirts</li>
                          <li>T-Shirts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => this.setState({ input: !this.state.input })}
                    className={"search-panel"}
                  ></div>
                  <input
                    type="text"
                    placeholder="search..."
                    className={
                      this.state.input
                        ? "search-panel__input "
                        : "search-panel-unactive"
                    }
                  />
                </div>
                <Link to="/" className="header-nav__title">
                  Arkanac
                </Link>
                <div className="container">
                  <div
                    className="share"
                    onClick={() =>
                      this.setState({
                        redirect: !this.state.redirect,
                      })
                    }
                  ></div>
                  <div
                    className="cart"
                    onClick={() => this.props.history.push("/basket")}
                  >
                    <div className="goods-in-cart">
                      {this.props.basketItems.length}
                    </div>
                    <div className="shopping-cart">
                      <p>Shopping Cart</p>
                      {this.props.basketItems.length !== 0 ? (
                        this.props.basketItems.map((item, index) => {
                          return (
                            <div className="shopping-cart__item" key={index}>
                              <div className="shopping-cart__item__img">
                                <img
                                  src={require("./../../images/carts/" +
                                    item.image)}
                                  alt=""
                                />
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
                                  {item.NewPrice} x {item.amount}
                                </p>
                              </div>
                              <div
                                className="shopping-cart__item__delete"
                                onClick={() =>
                                  this.props.deleteCardFromBasket(item._id)
                                }
                              >
                                <div className="line"></div>
                                <div className="line"></div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <h4 style={{ marginLeft: "5px" }}>Basket is empty!</h4>
                      )}

                      <div className="shopping-cart-details">
                        <div className="shopping-cart-details__row">
                          <p>shipping</p>
                          <p>$0.00</p>
                        </div>
                        <div className="shopping-cart-details__row">
                          <p>Taxes</p>
                          <p>$0.00</p>
                        </div>
                        <div className="shopping-cart-details__row">
                          <p> {this.props.basketItems.length} items</p>
                          <p>${this.props.totalPrice}</p>
                        </div>
                      </div>

                      <div className="shopping-cart-total">
                        <p>total</p>
                        <p>${this.props.totalPrice}</p>
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
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "grey",
                      }}
                      to={`/assortment/${item}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {item}
                    </NavLink>
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
const mapStateToProps = (state) => {
  return {
    basketItems: state.basket.basket,
    totalPrice: state.basket.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCardFromBasket: (id) => dispatch(deleteCardFromBasket(id)),
    getCardsFromBasket: () => dispatch(getCardsFromBasket()),
    countTotalPrice: () => dispatch(CountTotalPrice()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderMain));
