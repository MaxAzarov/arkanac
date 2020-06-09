import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCardAmount, filterCardByCategory } from "../../actions/cart";
import { Link } from "react-router-dom";
import "./Cards.css";

export class Cards extends Component {
  componentDidMount() {
    this.props.filterCardByCategory(this.props.sortingBy);
    if (this.props.proposals) {
      this.props.changeCardAmount(this.props.proposals);
    } else {
      this.props.changeCardAmount(this.props.cards.length);
    }
  }
  render() {
    console.log("sortingBy:", this.props.sortingBy);
    // console.log(this.props.changedCards);
    return (
      <div className="trending-cards">
        {this.props.changedCards.map((item, index) => {
          return (
            <div className="trending-card" key={index}>
              <div className="card-image">
                <img src={item.image} alt="" />
                <div className="card-details">
                  <Link
                    to={`/card/${item.id}`}
                    className="quick-view"
                    style={{ textDecoration: "none" }}
                  >
                    quick view
                  </Link>
                  <Link
                    className="details"
                    style={{ textDecoration: "none" }}
                    to={`/details`}
                  >
                    more details
                  </Link>
                </div>
              </div>
              {item.state && <div className="card-state">{item.state}</div>}
              {item.discount && (
                <div className="card-discount">{item.discount}</div>
              )}
              <div className="card-title">{item.title}</div>
              <div className="card-prices">
                <div className="card-price">{item.NewPrice}</div>
                <div className="card-old-price">{item.OldPrice}</div>
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
    filterCardByCategory: (category) =>
      dispatch(filterCardByCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
