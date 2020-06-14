import React, { Component } from "react";

import "./AssortmentFiltration.css";
import AssortmentCards from "./../../containers/AssortmentCards/AssortmentCards";
export class AssortmentFiltration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeCategory: ["Dresses", "Blouses", "Outerwear"],
      colorCategory: ["Beige", "Black", "Yellow", "White"],
      compositions: ["Cottom", "Polyester", "Viscose"],
      categories: [
        { name: "top" },
        { name: "t-shirt & blouses", list: ["Blouses", "Shirts", "T-Shirts"] },
        { name: "T-Shirt" },
        { name: "outerwear" },
      ],
    };
  }
  render() {
    return (
      <div className="assortment">
        <div className="left-bar">
          <div className="categories">
            {this.state.categories.map((category, index) => {
              return (
                <div className="category-item" key={index}>
                  <div className="wrapper">
                    <p>{category.name}</p>
                    <div className="list">
                      {category.list && (
                        <ul>
                          {category.list.map((list, index) => {
                            return <li key={index}>{list}</li>;
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="filter-categories">
            <p className="filter-title">Filter by</p>
            <p>Categories</p>
            <div className="category-type">
              {this.state.typeCategory.map((category, index) => {
                return (
                  <label className="category-item" key={index}>
                    <p>{category}</p>
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                );
              })}
            </div>

            <p>Color</p>
            <div className="category-color">
              {this.state.colorCategory.map((color, index) => {
                return (
                  <label className="category-item" key={index}>
                    <p>{color}</p>
                    <input type="checkbox" defaultChecked="checked" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: color }}
                    />
                  </label>
                );
              })}
            </div>
            <p>Compositions</p>
            <div className="category-compositions">
              {this.state.compositions.map((composition, index) => {
                return (
                  <label className="category-item" key={index}>
                    <p>{composition}</p>
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                );
              })}
            </div>

            <button className="clean-all">Clean all</button>
          </div>
        </div>
        <AssortmentCards></AssortmentCards>
      </div>
    );
  }
}

export default AssortmentFiltration;
