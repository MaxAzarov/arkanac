import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export class Cards extends Component {
  render() {
    return (
      <div className="trending-cards">
        {this.props.cards.map((item, index) => {
          return (
            <div className="trending-card" key={index}>
              <div className="card-image">
                <img
                  src={require("./../../images/carts/" + item.image)}
                  alt=""
                />
                <div className="card-details">
                  <Link
                    to={`/card/${this.props.category}/${item._id}`}
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

export default Cards;
