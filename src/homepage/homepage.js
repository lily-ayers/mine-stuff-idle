import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Era: props.era,
            Player: props.player
        };
    }
}

export default Homepage;