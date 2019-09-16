import React from 'react';
import { Homepage } from './homepage/homepage'
import { Mining } from './mining/mining'
import { Dungeoning } from './dungeoning/dungeoning'

class Hub extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Selected: "Home"
        };

        this.selectPage = this.selectPage.bind(this);
    }

    selectPage = (pageName) => {
        let state = this.state;
        state.Selected = pageName;
        this.setState(state);
    }

    render() {
        return (
            <div className="Index">
                {this.state.Selected === "Home" && <Homepage worldState={this.props.worldState} selectPage={this.selectPage} />}
                {this.state.Selected === "Mine" && <Mining worldState={this.props.worldState} selectPage={this.selectPage} />}
                {this.state.Selected === "Dungeon" && <Dungeoning worldState={this.props.worldState} selectPage={this.selectPage} />}
                {this.state.Selected === "Store" && <Homepage worldState={this.props.worldState} selectPage={this.selectPage} />}
                {this.state.Selected === "Employ" && <Homepage worldState={this.props.worldState} selectPage={this.selectPage} />}
                {this.state.Selected === "Propaganda" && <Homepage worldState={this.props.worldState} selectPage={this.selectPage} />}
            </div>
        );
    }
}

export default Hub;