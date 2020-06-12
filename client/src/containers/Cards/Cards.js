import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCardAmount, getCards } from "../../actions/cart";
import { Link } from "react-router-dom";
import "./Cards.css";

export class Cards extends Component {
  async componentDidMount() {
    await this.props.getCards();
    if (this.props.proposals) {
      this.props.changeCardAmount(this.props.proposals);
    } else {
      this.props.changeCardAmount(this.props.cards.length);
    }
  }
  render() {
    return (
      <div className="trending-cards">
        {this.props.changedCards.map((item, index) => {
          const img = require(`./../../images/carts/${index + 1}.png`);
          return (
            <div className="trending-card" key={index}>
              <div className="card-image">
                <img src={img} alt="" />
                <div className="card-details">
                  <Link
                    to={`/card/${item._id}`}
                    className="quick-view"
                    style={{ textDecoration: "none" }}
                  >
                    quick view
                  </Link>
                  {/* <Link
                    className="details"
                    style={{ textDecoration: "none" }}
                    to={`/details`}
                  >
                    more details
                  </Link> */}
                </div>
              </div>
              {item.state && <div className="card-state">{item.state}</div>}
              {item.discount && (
                <div className="card-discount">{item.discount}</div>
              )}
              <div className="card-title">{item.title}</div>
              <div className="card-prices">
                <div className="card-price">${item.NewPrice}</div>
                <div className="card-old-price">${item.OldPrice}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cart.cards,
    changedCards: state.cart.changedCards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCardAmount: (amount) => dispatch(changeCardAmount(amount)),
    getCards: () => dispatch(getCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
