import React from 'react';
import './styles/App.css';
import { Route, Switch } from "wouter"
import Home from './pages/1-Home/Home';
import Events from './pages/2-Events/Events';

function App() {
  return (
    <Switch>
      <Route component={Home} path='/' />
      <Route component={Events} path='/poaps' />
      <Route component={Home} path='/number-of-winners' />
      <Route component={Home} path='/ready' />
      <Route component={Home} path='/winners' />
    </Switch>
  );
}

export default App;
