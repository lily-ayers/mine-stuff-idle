import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Era: props.era,
            Player: props.player
        };
    }

    render(){
        return(
            <div>Test</div>
        )
    };
    
}

export default Homepage;
