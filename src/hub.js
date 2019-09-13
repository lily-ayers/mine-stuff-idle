import React from 'react';

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
                {Selected === "Home" && <}
            </div>
        );
    }
}

export default Homepage;