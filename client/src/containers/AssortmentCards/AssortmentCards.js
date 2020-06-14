import React, { Component } from "react";
import { connect } from "react-redux";

import "./AssortmentCards.css";
import Cards from "../Cards/Cards";
import { SortByPrice } from "./../../actions/assortment";
export class Assortment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtration: ["Price,high to low", "Price,low to high"],
      currentFiltrartion: "Price,high to low",
      activeFilters: ["Price,high to low"], // casual dresses
    };
  }

  async componentDidMount() {
    await this.props.SortByPrice(this.state.currentFiltrartion);
  }

  render() {
    return (
      <main className="assortment-main">
        <div className="assortment-main-title">
          <p>Dresses</p>
        </div>
        <div className="assortment-main-text">
          <p>
            Find your favorites dresses from our wide choice of evening, casual
            or summer dresses! We offer dresses for every day, every style and
            every occasion.
          </p>
        </div>
        <div className="sorting-info">
          <p>There are {this.props.cards.length} products</p>
          <div className="sort-by">
            <p>Sort by:</p>
            <select
              name=""
              className="price-filtration"
              onChange={(e) => {
                this.props.SortByPrice(e.target.value);
                this.setState({
                  activeFilters: [e.target.value],
                });
              }}
            >
              {this.state.filtration.map((filter, index) => {
                return (
                  <option value={filter} key={index}>
                    {filter}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="active-filters">
          <p>active filters</p>
          {this.state.activeFilters.map((filter, index) => {
            return (
              <div className="active-filters-item" key={index}>
                {filter}
                <div className="close"></div>
              </div>
            );
          })}
        </div>
        <Cards cards={this.props.filteredCards}></Cards>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.basket.cards,
    filteredCards: state.assortment.filteredCards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SortByPrice: (filtration) => dispatch(SortByPrice(filtration)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assortment);
