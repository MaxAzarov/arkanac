import React, { Component } from "react";
import "./AssortmentCards.css";
import Cards from "../../containers/Cards/Cards";

export class Assortment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtration: ["Price,high to low", "Price,low to high"],
    };
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
          <p>There are 5 products</p>
          <div className="sort-by">
            <p>Sort by:</p>
            <select name="" className="price-filtration">
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
          <div className="active-filters-item">
            Casual dresses
            <div className="close"></div>
          </div>
        </div>
        <Cards></Cards>
      </main>
    );
  }
}

export default Assortment;
