import React from 'react';
//import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Trip from "./Components/Pages/Trip/Trip";
import Trips from "./Components/Pages/Trips/Trips";
import Application from './Components/Pages/Application/Application'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/trips">
          <Trips />
        </Route>
        <Route exact path="/trip/:tripID">
          <Trip />
        </Route>
        <Route exact path="/Application/:tripID">
          <Application />
        </Route>
        <Route exact path="/">
          {/* O que será renderizado quando a rota for "/"" */}
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
