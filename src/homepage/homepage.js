import React, { Component } from 'react';

export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.switchPages = this.switchPages.bind(this);

    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    render() {
        return (
            <div className="HomepageMaster">
                <div className="StatusBox">
                    <table className="Materials">
                        <tbody>
                        {this.props.worldState.mines.map(mine => 
                            <tr key={mine.name}>
                                <td key={mine.name + " Title"}>{mine.name}</td>
                            {mine.materials.map(mat => (
                                <td key={mat[0]}>{mat[0]}: {mat[4]}</td>
                            ))}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="Navigation">
                    <div className="MiningPlate">
                        <button onClick={() => this.switchPages("Mine")}>Go to the Mines!</button>
                    </div>
                    <div className="DungeoningPlate">
                        <button onClick={() => this.switchPages("Dungeon")}>Go to the Dungeons!</button>
                    </div>
                    <div className="StoreingPlate">
                        <button onClick={() => this.switchPages("Store")}>Go to the Stores!</button>
                    </div>
                </div>
            </div>
        );
    }
}
