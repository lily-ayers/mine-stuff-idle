import React from 'react';
import { Homepage } from './homepage/homepage'
import { Mining } from './mining/mining'
import { Dungeoning } from './dungeoning/dungeoning'
import { Employering } from './employering/employering'
import { Storeing } from './storeing/storeing'

class Hub extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SelectedEra: this.props.era,
            Selected: "Home"
        };

        this.selectPage = this.selectPage.bind(this);
    }

    selectPage = (pageName) => {
        let state = this.state;
        state.Selected = pageName;
        this.setState(state);
    }

    static getDerivedStateFromProps(props, state) {
      if (props.era !== state.SelectedEra) {
          state.SelectedEra = props.era;
          state.Selected = "Home";
      }
      return state;
    }

    render() {
        return (
            <div style={this.props.font} className="Index">
                {this.state.Selected === "Home" && <Homepage worldState={this.props.worldState} era={this.props.era} selectPage={this.selectPage} />}
                {this.state.Selected === "Mine" && <Mining worldState={this.props.worldState[this.props.era]} selectPage={this.selectPage} />}
                {this.state.Selected === "Dungeon" && <Dungeoning worldState={this.props.worldState[this.props.era]} selectPage={this.selectPage} />}
                {this.state.Selected === "Store" && <Storeing worldState={this.props.worldState[this.props.era]} selectPage={this.selectPage} />}
                {this.state.Selected === "Employ" && <Employering worldState={this.props.worldState[this.props.era]} selectPage={this.selectPage} names={this.props.names} />}
                {this.state.Selected === "Propaganda" && <Homepage worldState={this.props.worldState[this.props.era]} selectPage={this.selectPage} />}
            </div>
        );
    }
}

export default Hub;