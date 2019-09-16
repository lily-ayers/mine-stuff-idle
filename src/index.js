import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WorldState from './world-state'

let worldState;

if (localStorage.getItem('MSI-WorldState')) {
    worldState = JSON.parse(localStorage.getItem('MSI-WorldState'));
} else {
    // Initialize New Game WorldState, Add Player's Held Amount of All Materials (0) to Every Materials Array
    worldState = WorldState;
    for (let era of WorldState) {
        for (let mine of era.mines) {
            for (let mat of mine.materials) {
                mat.push("0");
            }
        }
    }
    setInterval(() => {localStorage.setItem('MSI-WorldState', JSON.stringify(worldState))}, 1000);
}

ReactDOM.render(<App worldState={worldState} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
