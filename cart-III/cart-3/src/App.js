import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Shopping from './components/Shopping'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shopping />
      </BrowserRouter>
    </div>
  );
}

export default App;
