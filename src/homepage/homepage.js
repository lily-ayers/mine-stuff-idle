import React from 'react';

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.era.mines.map(mine => {
                mine.materials.map(mat => {
                    <label>{mat[0]}: {}</label>
                })
            })
        );
    }
}