import React from "react";
import { Route, Switch } from "react-router-dom";
import {Contact} from './components/Contact';
import {Login} from './components/Login';

const PageNotFound = ()=>{
  return <h1>404</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/:user" ><h1>ça marche</h1></Route>
      <Route><PageNotFound/></Route>
    </Switch>
  );
}

export default App;
