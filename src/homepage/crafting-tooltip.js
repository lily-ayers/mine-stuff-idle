import React, { Component } from 'react';


 export class CraftingTooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canCraft: this.props.craftables.available
        }
    }
    

    render() {
        return (
            this.props.craftables.results.map((result, index) =>
                <div key={index} className="tooltip">
                    <span key={result + index} className="tooltipName">{result}</span>
                    <span key={"req" + index} className="tooltipText">Required Materials:</span>

                    {this.props.craftables.materials[index].map(data =>
                        <span key={data.name + index} className="tooltipReq">{data.name}: {data.amount}</span>
                    )}
                    <button key={"craft" + index} className="tooltipButton" disabled={!this.state.canCraft[index]} onClick={() => this.props.craftItem(index)}>Craft!</button>
                </div>
            )
        );
    }
}

