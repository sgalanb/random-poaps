import React from 'react';
import './styles/App.css';
import { Route, Switch } from "wouter"
import Home from './pages/1-Home/Home';
import Events from './pages/2-Events/Events';
import NumberOfWinners from './pages/3-NumberOfWinners/NumberOfWinners';
import IdContext from './context/IdContext';
import useInitialState from './hooks/useInitialState';
import Ready from './pages/4-Ready/Ready';
import Results from './pages/5-Results/Results'

function App() {
  
  const initialState = useInitialState()

  return (
    <IdContext.Provider value={initialState}>
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Events} path='/poaps' />
        <Route component={NumberOfWinners} path='/number-of-winners' />
        <Route component={Ready} path='/ready' />
        <Route component={Results} path='/results' />
        <Route component={Home} />
      </Switch>
    </IdContext.Provider>
  );
}

export default App;
