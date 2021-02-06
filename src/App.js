import React from "react";
import { BrowserRouter, Route, Switch } from "react-dom";
import LandingPage from "./app/pages/LandingPage";
import CartPage from "./app/pages/CartPage";
import AdminPage from "./app/pages/AdminPage";
import NotFound from "./app/pages/404";
import "./App.global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
