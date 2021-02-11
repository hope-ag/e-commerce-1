import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NavBar from "./app/components/Navbar";
import CartPage from "./app/pages/CartPage";
import Account from "./app/pages/Account";
import Admin from "./app/pages/Admin";
import NotFound from "./app/pages/404";
import "./App.global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
