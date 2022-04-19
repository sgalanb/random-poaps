import React from 'react';
import './styles/App.css';
import { Route, Switch } from "wouter"
import Home from './pages/1-Home/Home';
import Events from './pages/2-Events/Events';
import NumberOfWinners from './pages/3-NumberOfWinners/NumberOfWinners';
import IdContext from './context/IdContext';
import useInitialState from './hooks/useInitialState';

function App() {
  
  const initialState = useInitialState()

  return (
    <IdContext.Provider value={initialState}>
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Events} path='/poaps' />
        <Route component={NumberOfWinners} path='/number-of-winners' />
        <Route component={Home} path='/ready' />
        <Route component={Home} path='/winners' />
        <Route component={Home} />
      </Switch>
    </IdContext.Provider>
  );
}

export default App;
