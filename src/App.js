import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HeaderMain from "./Components/HeaderMain/HeaderMain";
import Features from "./Components/Features/Features";
import Clothes from "./Components/Clothes/Clothes";
import TopTrending from "./Components/TopTrending/TopTrending";
import Information from "./Components/Information/Information";
import Footer from "./Components/Footer/Copyright";
import HeaderAssortment from "./Components/HeaderAssortment/HeaderAssortment";
import Assortment from "./Components/Assortment/Assortment";
import CardPreview from "./Components/CardPreview/CardPreview";
import HeaderCard from "./Components/HeaderCard/HeaderCard";
import Proposals from "./Components/Proposals/Proposals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HeaderMain></HeaderMain>
          <Features></Features>
          <Clothes></Clothes>
          <TopTrending></TopTrending>
          <Information></Information>
          <Footer></Footer>
        </Route>
        <Route path="/assortment" exact>
          <HeaderAssortment></HeaderAssortment>
          <Assortment></Assortment>
          <Footer></Footer>
        </Route>
        <Route path="/card" exact>
          <HeaderCard></HeaderCard>
          <CardPreview></CardPreview>
          <Proposals></Proposals>
          <Footer></Footer>
        </Route>
        <Route path="/cart" exact>
          <Cart></Cart>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
