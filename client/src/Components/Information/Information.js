import React, { Component } from "react";
import sisley from "../../images/logos/Logo_11.png";
import wrangler from "../../images/logos/Logo_15.png";
import fredPerry from "../../images/logos/Logo_16.png";
import levis from "../../images/logos/Logo_4.png";
import jackjones from "../../images/logos/Logo_5.png";
import lacoste from "../../images/logos/Logo_6.png";
import Instagram1 from "../../images/instagram/1.png";
import Instagram2 from "../../images/instagram/2.png";
import Instagram3 from "../../images/instagram/3.png";
import Instagram4 from "../../images/instagram/4.png";
import Instagram5 from "../../images/instagram/5.png";
import Instagram6 from "../../images/instagram/6.png";
import BagsShoesImg from "../../images/BagsShoes.png";
import Map from "../../images/instagram/Map.png";
import "./Information.css";

export class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [sisley, wrangler, fredPerry, levis, jackjones, lacoste],
      images2: [
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
      <>
        <section className="bags-shoes">
          <div className="bags-shoes-img">
            <img src={BagsShoesImg} alt="" />
          </div>
          <div className="bags-shoes-text">
            <div className="bags-shoes-title">Bags & Shoes</div>
            <div className="bags-shoes-subtitle">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </div>
            <button className="bags-shoes-btn">Discovery more</button>
          </div>
        </section>

        <section className="trademark">
          {this.state.images.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </section>
        <section className="instagram-wrapper">
          {this.state.images2.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </section>

        <section className="map-wrapper">
          <div className="map-info">
            <div className="map-info-location">
              Alterego, 1 Infinite Loop, Cupertino, CA 95014
            </div>
            <div className="map-info-tel">8 - 800 - 2000 - 3000</div>
            <div className="map-info-post">demo@demo.com</div>
            <div className="map-info-work">Mon. - Sun: 09:00 - 19:00</div>
          </div>
          <img src={Map} alt="" />
        </section>
      </>
    );
  }
}

export default Information;
