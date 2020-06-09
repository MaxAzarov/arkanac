import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import Clothes from "./Components/Clothes/Clothes";
import TopTrending from "./Components/TopTrending/TopTrending";
import Information from "./Components/Information/Information";
import Footer from "./Components/Footer/Copyright";
import AssortmentFiltration from "./Components/AssortmentFiltration/AssortmentFiltration";
import CardPreview from "./Components/CardPreview/CardPreview";
import Cart from "./Components/Cart/Cart";

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
        <Route path="/assortment" exact>
          <Header></Header>
          <AssortmentFiltration></AssortmentFiltration>
          <Footer></Footer>
        </Route>
        <Route path="/card/:id" exact>
          <Header></Header>
          <CardPreview></CardPreview>
          <Footer></Footer>
        </Route>
        <Route path="/cart" exact>
          <Header></Header>
          <Cart></Cart>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
