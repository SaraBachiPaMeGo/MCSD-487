import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal';
import "bootstrap/dist/css/bootstrap.min.css";
import Router  from './components/Router';

function App() {
  return (
    <div className="App">      
      <MenuPrincipal></MenuPrincipal>
      <Router></Router>
    </div>
  );
}

export default App;
