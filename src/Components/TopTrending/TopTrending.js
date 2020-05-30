import React, { Component } from "react";

import "./TopTrending.css";
import Cards from "./../Cards/Cards";

export class TopTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingSorting: ["New products", "Prices drop", "Best sales"],
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
              <button key={index}>
                <span>{item}</span>
                <div className="triangle"></div>
              </button>
            );
          })}
        </section>
        <Cards></Cards>
        <button className="all-products-btn">all products</button>
      </div>
    );
  }
}

export default TopTrending;
