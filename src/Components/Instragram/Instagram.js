import React, { Component } from "react";
import "./Instagram.css";
import Instagram1 from "./../../images/instagram/1.png";
import Instagram2 from "./../../images/instagram/2.png";
import Instagram3 from "./../../images/instagram/3.png";
import Instagram4 from "./../../images/instagram/4.png";
import Instagram5 from "./../../images/instagram/5.png";
import Instagram6 from "./../../images/instagram/6.png";
export class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        Instagram1,
        Instagram2,
        Instagram3,
        Instagram4,
        Instagram5,
        Instagram6,
      ],
    };
  }
  render() {
    return (
      <div className="instagram-wrapper">
        {this.state.images.map((img, index) => {
          return <img src={img} alt="" key={index} />;
        })}
      </div>
    );
  }
}

export default Instagram;
