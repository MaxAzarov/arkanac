import React, { Component } from "react";

import "./TopTrending.css";
import Cards from "../../containers/Cards/Cards";
import { Link } from "react-router-dom";

export class TopTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingSorting: ["New products", "Prices drop", "Best sales"],
      sortingBy: "New products",
    };
  }
  render() {
    return (
      <div className="top-trending-wrapper">
        <div className="top-trending-title">Top Trending</div>
        <div className="top-trending-text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
        <section className="top-trending-sorting">
          {this.state.trendingSorting.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  this.setState({ sortingBy: item });
                }}
              >
                <span>{item}</span>
                <div className="triangle"></div>
              </button>
            );
          })}
        </section>
        <Cards sortingBy={this.state.sortingBy}></Cards>
        <button className="all-products-btn">
          <Link
            to="/assortment"
            style={{ textDecoration: "none", color: "white" }}
          >
            all products
          </Link>
        </button>
      </div>
    );
  }
}

export default TopTrending;
