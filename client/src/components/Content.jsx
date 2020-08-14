import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import SearchBar from "./SearchBar";
import Shop from "./Shop";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import SignIn from "./SignIn";

// Render the content area based on status and path
export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Shop />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Route exact path="/search">
        <SearchBar />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
};
