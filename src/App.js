import React from 'react';
import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from "wouter"
import { ToastContainer } from 'react-toastify';
import useInitialState from './hooks/useInitialState';
import Home from './pages/1-Home/Home';
import Events from './pages/2-Events/Events';
import NumberOfWinners from './pages/3-NumberOfWinners/NumberOfWinners';
import IdContext from './context/IdContext';
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
      <ToastContainer position="bottom-center" autoClose={2000} theme='dark' closeButton='' newestOnTop hideProgressBar />
    </IdContext.Provider>
  );
}

export default App;
