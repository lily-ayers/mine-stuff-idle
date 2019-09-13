import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function App() {
  return (
    <div className="navbar">
      <Navbar player={props.player}/>
    </div>
    <div className="main">
      <Homepage player={props.player}/>
    </div>
  );
}

export default App;