import React from 'react';
import './styles/App.css';
import Home from './pages/1-Home/Home';
import { Route} from "wouter"

function App() {
  return (
    <Route 
      component={Home}
      path='/' 
    />
  );
}

export default App;
