import React from 'react';
import { Homepage } from './homepage/homepage'

class Hub extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Era: props.era,
            Player: props.player,
            Selected: "Home"
        };
    }

    selectPage = (pageName) => {
        let state = this.state;
        state.Selected = pageName;
        this.setState(state);
    }

    render() {
        return (
            <div className="index">
                {this.state.Selected === "Home" && <Homepage worldState={this.props.worldState}/>}
            </div>
        );
    }
}

export default Hub;