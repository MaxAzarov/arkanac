import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
        { name: "Dresses" },
        { name: "Blouses", list: ["Blouses", "Shirts", "T-Shirts"] },
        { name: "T-Shirts" },
        { name: "Outerwear" },
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
                <div
                  className="category-item"
                  key={index}
                  onClick={() =>
                    this.props.history.push("/assortment/" + category.name)
                  }
                >
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
        </div>
        <AssortmentCards
          category={this.props.match.params.category}
        ></AssortmentCards>
      </div>
    );
  }
}

export default withRouter(AssortmentFiltration);
