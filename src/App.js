import React from 'react';
import { tsPropertySignature } from '@babel/types';

class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      selectedEra: 0
    }

    this.changeEra = this.changeEra.bind(this);
  }

  changeEra = (era) => {
    this.setState({
      selectedEra: era
    })
  }

  render() {
    return (
      <div className="main">
        <Navbar player={props.player} changeEra={this.changeEra}/>
        <Hub player={props.player}/>
      </div>
    );
  }
}

export default App;