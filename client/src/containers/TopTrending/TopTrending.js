import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./TopTrending.css";
import Cards from "../Cards/Cards";
import { topTrending } from "./../../actions/trending";

export class TopTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingSorting: ["New products", "Prices drop", "Best sales"],
      sortingBy: "New products",
    };
  }

  async componentDidMount() {
    await this.props.topTrending(this.state.sortingBy);
  }
  render() {
    console.log(this.props);
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
                className={
                  this.state.sortingBy === item ? "top-trending-btn" : ""
                }
                onClick={() => {
                  this.props.topTrending(item);
                  this.setState({ sortingBy: item });
                }}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </section>
        <Cards cards={this.props.trending} category={"Blouses"}></Cards>
        <Link
          to="/assortment/Blouses"
          style={{ textDecoration: "none", color: "white" }}
        >
          <button className="all-products-btn">all products</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trending: state.trending.trending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    topTrending: (filter) => dispatch(topTrending(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTrending);
