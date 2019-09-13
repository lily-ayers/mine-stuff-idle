import React, { Component } from 'react';

export class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.worldState.mines.map(mine => {
                mine.materials.map(mat => 
                    <label>{mat[0]}: {mat[4]}</label>
                )
            })
        );
    }
}
