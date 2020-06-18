import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./containers/Header/Header";
import Features from "./Components/Features/Features";
import Clothes from "./Components/Clothes/Clothes";
import TopTrending from "./containers/TopTrending/TopTrending";
import Information from "./Components/Information/Information";
import Footer from "./containers/Footer/Footer";
import AssortmentFiltration from "./Components/AssortmentFiltration/AssortmentFiltration";
import CardPreview from "./containers/CardPreview/CardPreview";
import Basket from "./containers/Basket/Basket";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header header={true} data={true}></Header>
          <Features></Features>
          <Clothes></Clothes>
          <TopTrending></TopTrending>
          <Information></Information>
          <Footer></Footer>
        </Route>
        <Route path="/assortment/:category" exact>
          <Header></Header>
          <AssortmentFiltration></AssortmentFiltration>
          <Footer></Footer>
        </Route>
        <Route path="/card/:category/:id" exact>
          <Header></Header>
          <CardPreview></CardPreview>
          <Footer></Footer>
        </Route>
        <Route path="/basket" exact>
          <Header></Header>
          <Basket></Basket>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
