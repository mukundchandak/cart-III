import React from 'react';
import './App.css';
import Routes from './components/Routes';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
