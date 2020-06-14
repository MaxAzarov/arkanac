import React, { Component } from "react";
import { connect } from "react-redux";
import { getCards } from "../../actions/cards";
import { Link } from "react-router-dom";
import "./Cards.css";

export class Cards extends Component {
  async componentDidMount() {
    await this.props.getCards();
  }
  render() {
    return (
      <div className="trending-cards">
        {this.props.cards.map((item, index) => {
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
                </div>
              </div>
              {item.state && <div className="card-state">{item.state}</div>}
              {item.discount && (
                <div className="card-discount">{item.discount}%</div>
              )}
              <div className="card-title">{item.title}</div>
              <div className="card-prices">
                <div className="card-price">${item.newPrice}</div>
                <div className="card-old-price">${item.oldPrice}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards()),
  };
};

export default connect(null, mapDispatchToProps)(Cards);
