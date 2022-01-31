import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FilmDetails from "./FilmDetails";
import Main from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/details" component={FilmDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
