import React from 'react';
import { tsPropertySignature } from '@babel/types';

//Components
import Navbar from './Navbar';
import Homepage from './homepage/homepage';

function App(props) {
  return (
    <div className="main">
      <Navbar player={props.player}/>
      <Homepage/>
    </div>
  );
}

export default App;