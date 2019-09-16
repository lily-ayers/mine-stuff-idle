import React, { Component } from 'react';

export class Mining extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMine: null
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

    render() {
        return (
            <div className="MiningMaster">
                <div className="Navigation">
                    <div className="ReturnPlate">
                        <button onClick={() => this.switchPages("Home")}>Back</button>
                    </div>
                </div>
                <div className="MineSelect">
                    <table className="Mines">
                        <tbody>
                        {this.props.worldState.mines.map((mine, index) => 
                            <tr key={mine.name}>
                                <td key={mine.name+"Cell"}>
                                    <button key={mine.name+"Button"} onClick={() => (this.state.selectedMine !== index ?
                                        this.selectMine(index) : this.selectMine(null))}>{mine.name}</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                {this.selected !== null && 
                    <div className="MaterialList">
                        <table className="MaterialsInMine">
                            <tbody>
                                {this.state.selectedMine !== null ? this.props.worldState.mines[this.state.selectedMine].materials.map(mat => (
                                    <tr key={mat[0]+"Row"}>
                                        <td key={mat[0]+"Cell"}>{mat[0]}: {mat[4]}</td>
                                    </tr>
                                )) : <tr key="NullRow"><td key="NullCell">Select a Mine!</td></tr>}
                            </tbody>
                        </table>
                    </div>
                }
                
            </div>
        );
    }
}
