import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCardAmount } from "./../../actions/cart";
import "./Cards.css";

export class Cards extends Component {
  componentDidMount() {
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
          return (
            <div className="trending-card" key={index}>
              <div className="card-image">
                <img src={item} alt="" />
                <div className="card-details">
                  <button className="quick-view">quick view</button>
                  <button className="details">more details</button>
                </div>
              </div>
              <div className="card-state">New</div>
              <div className="card-discount">-20%</div>
              <div className="card-title">
                Excepteur sint occaecat cupidatat
              </div>
              <div className="card-prices">
                <div className="card-price">$ 199.00</div>
                <div className="card-old-price">$ 299.00</div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
