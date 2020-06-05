import React, { Component } from "react";
import "./CardPreview.css";
import img from "./../../images/model.png";
import facebook from "./../../images/icons/facebook.png";
import twitter from "./../../images/icons/twitter.png";
import google from "./../../images/icons/google.png";
import logo from "./../../images/Wallet.png";
import bus from "./../../images/Bus.png";
import persons from "./../../images/Person.png";
import card1 from "./../../images/carts/1.png";
import card2 from "./../../images/carts/2.png";
import card3 from "./../../images/carts/3.png";
import card4 from "./../../images/carts/4.png";
import Tabs from "./../Tabs/Tabs";

export class CardPreview extends Component {
  render() {
    return (
      <>
        <section className="card-preview-wrapper">
          <div className="images-container">
            <div className="image-big">
              <img src={img} alt="" />
            </div>
            <div className="images-swiper">
              <button className="btn-left">
                <div className="arrow"></div>
              </button>
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
              <button className="btn-right">
                <div className="arrow"></div>
              </button>
            </div>
          </div>
          <div className="card-preview-text">
            <div className="card-preview-title">
              Embroidery denim recerback tank
            </div>
            <div className="card-preview-price-new">$59.95</div>
            <div className="card-preview-subtitle">
              Nemo enim ipsam voluptatem,quia voluptas sit,aspernatur aut odit
              aut fugit,sed quia consequuntur magni dolores eos,qui ratione
              voluptatem sequi nesciunt, neque porro quisquam est,qui dolorem
              ipsum
            </div>

            <div className="card-preview-social">
              <div className="social-circle-wrapper">
                <div className="social-circle">
                  <img src={facebook} alt="" />
                </div>
                <div className="social-circle">
                  <img src={twitter} alt="" />
                </div>
                <div className="social-circle">
                  <img src={google} alt="" />
                </div>
              </div>
            </div>

            <div className="card-preview-settings">
              <div className="settings-item">
                <label htmlFor="size">Size</label>
                <select name="" id="size">
                  <option value="XL">XL</option>
                  <option value="L">L</option>
                  <option value="S">S</option>
                </select>
              </div>

              <div className="settings-item-color">
                <p>Color</p>
                <div className="color-picker">
                  <div className="color-picker-item"></div>
                  <div className="color-picker-item"></div>
                  <div className="color-picker-item"></div>
                </div>
              </div>

              <div className="settings-item">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min={1}
                  max={5}
                  defaultValue={1}
                />
              </div>
              <div className="cart-manipulation">
                <button className="btn btn-cart ">Add to card</button>
                <div className="status">In stock</div>
              </div>

              <div className="all-features">
                <div className="feature-wrapper">
                  <div className="all-features-item">
                    <img src={logo} alt="" />
                    <p>Discount system</p>
                  </div>

                  <div className="all-features-item">
                    <img src={bus} alt="" />
                    <p> Free delivery</p>
                  </div>

                  <div className="all-features-item">
                    <img src={persons} alt="" />
                    <p> Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Tabs></Tabs>
      </>
    );
  }
}

export default CardPreview;
