import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import FoodSearch from "./FoodSearch";
import Navbar from "./Navbar";
import Food from "./Food";
import Meal from "./Meal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={routeProps => <Food {...routeProps} />}
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          <Route
            exact
            path="/"
            render={routeProps => <FoodSearch {...routeProps} />}
          />
          <Route render={() => <h1>404 PAGE NOT FOUND..😥</h1>} />
        </Switch>
      </div>
    );
  }
}
export default App;
