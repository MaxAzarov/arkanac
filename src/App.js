import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HeaderMain from "./Components/HeaderMain/HeaderMain";
import Features from "./Components/Features/Features";
import Clothes from "./Components/Clothes/Clothes";
import TopTrending from "./Components/TopTrending/TopTrending";
import BagsShoes from "./Components/BagsShoes/BagsShoes";
import TradeMark from "./Components/TradeMark/TradeMark";
import Instragram from "./Components/Instragram/Instagram";
import Location from "./Components/Location/Location";
import Copyright from "./Components/Copyright/Copyright";
import HeaderCart from "./Components/HeaderCart/HeaderCart";
import Assortment from "./Components/Assortment/Assortment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HeaderMain></HeaderMain>
          <Features></Features>
          <Clothes></Clothes>
          <TopTrending></TopTrending>
          <BagsShoes></BagsShoes>
          <TradeMark></TradeMark>
          <Instragram></Instragram>
          <Location></Location>
          <Copyright></Copyright>
        </Route>
        <Route path="/assortment" exact>
          <HeaderCart></HeaderCart>
          <Assortment></Assortment>
          <Copyright></Copyright>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
