import React, { Component } from 'react';
import { Items } from '../items';

export class Dungeoning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDungeon: null,
            dungeoning: false,
            currentEnemy: null,
            defending: false
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
        this.toggleDungeoning();
        let state = this.state;
        state.currentEnemy = JSON.parse(JSON.stringify(this.props.worldState.dungeons[this.state.selectedDungeon].enemies[enemIndex]));
        this.setState(state);
    }

    battle = (action) => {
        this.state.defending = false;
        if (action === "attack") {
            let damage;
            for (let equip of this.props.worldState.equippedInventory) {
                damage += equip.damage;
            }
            this.state.currentEnemy[3] -= (
                damage / this.state.currentEnemy[4]
            );
        } else if (action === "defend") {
            this.state.defending = true;
        } else if (action === "run") {
            this.state.currentEnemy = null;
            this.toggleDungeoning();
        }
        if (this.state.currentEnemy[2] <= 0) {
            this.getDrops();
            this.state.currentEnemy = null;
            this.toggleDungeoning();
        }
    }

    getDrops = () => {
        let item = Items.find(data => data.name = this.state.currentEnemy[5])
        if (item.type === "Equippable") {
            this.props.worldState.equippableItems.push(item)
        } else if (item.type === "Consumable") {
            this.props.worldState.consumables.push(item)
        } else {
            this.props.worldState.otherMaterials.push(item)
        }
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
                                    <td key={enem[0]+"Cell"}><button disabled={this.state.dungeoning} onClick={() => this.fightEnemy(index)}>{enem[0]}</button> Power: {enem[3]}, Defense: {enem[4]}</td>
                                </tr>
                            )) : <tr className="nullRow"><td className="nullCell">Select a Dungeon!</td></tr>}
                        </tbody>
                    </table>
                </div>
                {this.state.dungeoning &&
                    <div className="battlePanel">
                        <label className="enemyName">{this.state.currentEnemy[0]}</label>
                        <label className="enemyHP">Health: {this.state.currentEnemy[2]}/{this.state.currentEnemy[1]}</label>
                        <label className="enemyStat">Damage: {this.state.currentEnemy[3]}</label>
                        <label className="enemyStat">Defense: {this.state.currentEnemy[4]}</label>
                        <label className="enemyStat">Drops: {this.state.currentEnemy[5]}</label>
                        <button className="battleAction" onClick={() => this.battle('attack')}>Attack!</button>
                        <button className="battleAction" onClick={() => this.battle('defend')}>Defend!</button>
                        <button className="battleAction" onClick={() => this.battle('run')}>Run!</button>
                    </div>
                }
            </div>
        );
    }
}
