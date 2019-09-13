import React, {Component} from 'react';
import { tsPropertySignature } from '@babel/types';

//Components
import Navbar from './Navbar';
import Homepage from './homepage/homepage';

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
        <Navbar player={this.props.player} changeEra={this.changeEra}/>
        {/* <Hub player={props.player}/> */}
      </div>
    );
  }
}

export default App;