import React, { Component } from 'react';
import Items from '../items';

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
        state.currentEnemy = null;
        state.dungeoning = false;
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
        state.currentEnemy = this.props.worldState.dungeons[this.state.selectedDungeon].enemies[enemIndex];
        this.setState(state);
    }

    battle = (action) => {
        let state = this.state
        state.defending = false;
        if (action === "attack") {
            let damage = 1;
            for (let equip of this.props.worldState.equippedItems) {
                if (equip !== null) {
                    damage += equip.damage;
                    console.log(damage + " (just added " + equip.name + " for " + equip.damage + " damage)")
                }
            }
            state.currentEnemy[2] -= (damage / this.state.currentEnemy[4]);
        } else if (action === "defend") {
            state.defending = true;
        }
        this.setState(state);
        if (action === "run") {
            state.currentEnemy = null;
            this.toggleDungeoning();
        } else if (state.currentEnemy[2] <= 0) {
            this.getDrops();
            state.currentEnemy[6] = false;
            state.currentEnemy[2] = state.currentEnemy[1];
            state.currentEnemy = null;
            this.toggleDungeoning();
        } else {
            this.enemyTurn();
        }
        if (this.props.worldState.stats[1] <= 0) {
            state.currentEnemy[6] = false;
            state.currentEnemy[2] = state.currentEnemy[1];
            state.currentEnemy = null;
            this.props.worldState.stats[1] = this.props.worldState.stats[2];
        }
        this.setState(state);
        this.forceUpdate();
    }

    enemyTurn = () => {
        let enemy = this.state.currentEnemy;
        this.props.worldState.stats[1] -= (enemy[3] - this.props.worldState.stats[4]);
        console.log(this.state.currentEnemy[0] + " attacked for " + (enemy[3] - this.props.worldState.stats[4]) + " damage!");
        
    }

    getDrops = () => {
        let item = Items.find(data => data.name === this.state.currentEnemy[5])
        if (item.type === "Equippable") {
            let slot;
            switch (item.slot) {
                case "Head":
                    slot = 0;
                    break;
                case "Chest":
                    slot = 1
                    break;
                case "Weapon":
                    slot = 2
                    break;
                case "Legs":
                    slot = 3
                    break;
            }
            if (this.props.worldState.equippedItems[slot].name !== item.name) {
                this.props.worldState.equippableItems[slot].push(item);
                this.props.worldState.equippableItems[slot] = [...new Set(this.props.worldState.equippableItems[slot])];
            }
        } else if (item.type === "Consumable") {
            let found = false;
            for (let consumable of this.props.worldState.consumables) {
                if (consumable.name === item.name) {
                    consumable.amountHeld++;
                    found = true;
                }
            }
            if (!found) {
                this.props.worldState.consumables.push(item)
            }
            this.props.worldState.consumables.push(item)
        } else {
            let found = false;
            for (let material of this.props.worldState.otherMaterials) {
                if (material.name === item.name) {
                    material.amountHeld++;
                    found = true;
                }
            }
            if (!found) {
                this.props.worldState.otherMaterials.push(item)
            }
            this.props.worldState.otherMaterials.push(item)
        }
    }

    render() {
        return (
            <div className="master">
                <div className="navigation">
                    <div className="plate">
                        <button className="escBtn" onClick={() => this.switchPages("Home")}>Back</button>
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
