import React from 'react';
import { Route, Switch } from "wouter"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/App.css';

import RaffleContext from 'context/RaffleContext';
import useRaffleInitialState from 'hooks/useRaffleInitialState';
import Home from 'pages/1-Home/Home';
import Events from 'pages/2-Events/Events';
import NumberOfWinners from 'pages/3-NumberOfWinners/NumberOfWinners';
import Ready from 'pages/4-Ready/Ready';
import Results from 'pages/5-Results/Results'
import NotFound from 'pages/NotFound/NotFound'

function App() {
  
  const RaffleInitialState = useRaffleInitialState()

  return (
    <RaffleContext.Provider value={RaffleInitialState}>
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Events} path='/add-events' />
        <Route component={NumberOfWinners} path='/number-of-winners' />
        <Route component={Ready} path='/ready' />
        <Route component={Results} path='/results' />
        <Route component={NotFound} />
      </Switch>
      <ToastContainer position="bottom-center" autoClose={2000} theme='dark' closeButton='' newestOnTop hideProgressBar />
    </RaffleContext.Provider>
  );
}

export default App;
