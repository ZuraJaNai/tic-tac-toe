import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
