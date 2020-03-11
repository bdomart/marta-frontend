import React from "react";
import { Route, Switch } from "react-router-dom";
import {Contact} from './components/Contact'

function App() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/admin"></Route>
    </Switch>
  );
}

export default App;
