import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import newPlayer from './new-player'

let player;

if (localStorage.getItem('MSI-Player')) {
    player = localStorage.getItem('MSI-Player');
} else {
    player = newPlayer;
}

ReactDOM.render(<App player={player} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
