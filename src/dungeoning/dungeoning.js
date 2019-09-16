import React, { Component } from 'react';

export class Dungeoning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDungeon: null,
            dungeoning: false
        }
        this.switchPages = this.switchPages.bind(this);
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    selectDungeon = (index) => {
        let state = this.state;
        state.selectedDungeon = index;
        this.setState(state);
    }

    toggleDungeoning = () => {
        let state = this.state;
        state.dungeoning = !state.dungeoning;
        this.setState(state);
    }

    fightEnemy = (enemIndex) => {
    }

    render() {
        return (
            <div className="dungeoningMaster">
                <div className="navigation">
                    <div className="returnPlate">
                        <button onClick={() => this.switchPages("Home")}>Back</button>
                    </div>
                </div>
                <div className="dungeonSelect">
                    <table className="dungeon">
                        <tbody>
                        {this.props.worldState.dungeons.map((dungeon, index) =>
                            <tr key={dungeon.name}>
                                {this.props.worldState.triggerDungeons[index] &&
                                <td key={dungeon.name+"Cell"}>
                                    <button key={dungeon.name+"Button"} onClick={() => (this.state.selectedDungeon !== index ?
                                        this.selectDungeon(index) : this.selectDungeon(null))}>{dungeon.name}</button>
                                </td>}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                    <div className="enemyList">
                        <table className="enemiesInDungeon">
                            <tbody>
                                {this.state.selectedDungeon !== null ? this.props.worldState.dungeons[this.state.selectedDungeon].enemies.map((enem, index) => (
                                    <tr key={enem[0]+"Row"}>
                                        <td key={enem[0]+"Cell"}><button disabled={this.state.mining} onClick={() => this.fightEnemy(index)}>{enem[0]}</button> Power: {enem[3]}, Defense: {enem[4]}</td>
                                    </tr>
                                )) : <tr className="nullRow"><td className="nullCell">Select a Dungeon!</td></tr>}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}
