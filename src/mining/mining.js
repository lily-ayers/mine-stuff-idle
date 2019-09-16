import React, { Component } from 'react';

export class Mining extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMine: null,
            mining: false
        }
        this.switchPages = this.switchPages.bind(this);
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    selectMine = (index) => {
        let state = this.state;
        state.selectedMine = index;
        this.setState(state);
        console.log(state);
    }

    toggleMining = () => {
        let state = this.state;
        state.mining = !state.mining;
        this.setState(state);
        console.log(this.state);
    }

    mineMaterial = (matIndex) => {
        let mat = this.props.worldState.mines[this.state.selectedMine].materials[matIndex]
        let power = 1
        for (let equip of this.props.worldState.equippedItems)
            power += equip.power;
        if (mat[2] > 0) {
            if (power >= (mat[3])) {
                this.toggleMining();
                setTimeout(() => {
                    mat[2]--;
                    mat[4]++;
                    this.forceUpdate();
                    this.toggleMining();
                }, (2000 / (1 + (power - mat[3]))));
            } else {
                console.log('Not enough power!');
            }
        } else {
            console.log('No Ore left!');
        }
    }

    render() {
        return (
            <div className="miningMaster">
                <div className="navigation">
                    <div className="returnPlate">
                        <button onClick={() => this.switchPages("Home")}>Back</button>
                    </div>
                </div>
                <div className="mineSelect">
                    <table className="mines">
                        <tbody>
                        {this.props.worldState.mines.map((mine, index) =>
                            <tr key={mine.name}>
                                {this.props.worldState.triggerMines[index] &&
                                <td key={mine.name+"Cell"}>
                                    <button key={mine.name+"Button"} onClick={() => (this.state.selectedMine !== index ?
                                        this.selectMine(index) : this.selectMine(null))}>{mine.name}</button>
                                </td>}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                    <div className="materialList">
                        <table className="materialsInMine">
                            <tbody>
                                {this.state.selectedMine !== null ? this.props.worldState.mines[this.state.selectedMine].materials.map((mat, index) => (
                                    <tr key={mat[0]+"Row"}>
                                        <td key={mat[0]+"Cell"}><button disabled={this.state.mining} onClick={() => this.mineMaterial(index)}>{mat[0]}</button> {mat[2]}/{mat[1]} remaining. difficulty: {mat[3]}</td>
                                    </tr>
                                )) : <tr className="nullRow"><td className="nullCell">Select a Mine!</td></tr>}
                            </tbody>
                        </table>
                    </div>                
            </div>
        );
    }
}
