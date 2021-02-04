import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/HOC/Layout/Layout";
import BurgerBuilder from "./Components/Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Components/Containers/CheckOut/checkout";
import Orders from "./Components/Containers/Orders/Orders";
import Auth from "./Components/Containers/Auth/Auth";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
