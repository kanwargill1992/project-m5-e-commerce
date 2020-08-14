import React from "react";
import { Route, Switch } from "react-router-dom";

import { useShopContext } from "../context/ShopContext";
import { STATUS } from "../context/actions";
import Spinner from "./Spinner";
import Error from "./Error";

import Home from "./Home";
import SearchBar from "./SearchBar";
import Shop from "./Shop";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

import Firestore from './Firestore'

// Render the content area based on status and path
export default () => {
  const {
    state: { status },
  } = useShopContext();

  switch (status) {
    case STATUS.IDLE:
      return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Shop />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/firebase">
            <Firestore />
          </Route>

          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      );
    case STATUS.LOADING:
      return <Spinner />;
    case STATUS.ERROR:
      return <Error />;
    default:
      return <Error />;
  }
};
