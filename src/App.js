import React, {Component} from 'react';
import { tsPropertySignature } from '@babel/types';
import Navbar from './Navbar'
import Hub from './hub'

class App extends Component {
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
        <Navbar worldState={this.props.worldState} changeEra={this.changeEra}/>
        <Hub worldState={this.props.worldState[this.state.selectedEra]}/>
      </div>
    );
  }
}

export default App;