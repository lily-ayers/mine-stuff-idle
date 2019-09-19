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
        let state = this.state;
        if (state.currentEnemy) {
            state.currentEnemy[2] = state.currentEnemy[1];
        }
        this.setState(state);
        this.props.selectPage(pageNum);
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
                }
            }
            state.currentEnemy[2] -= (damage / this.state.currentEnemy[4]);
        } else if (action === "defend") {
            state.defending = true;
        }
        this.setState(state);
        if (action === "run") {
            state.currentEnemy[2] = state.currentEnemy[1];
            state.currentEnemy = null;
            state.dungeoning = false;
        } else if (state.currentEnemy[2] <= 0) {
            this.getDrops();
            state.currentEnemy[6] = false;
            state.currentEnemy[2] = state.currentEnemy[1];
            state.currentEnemy = null;
            state.dungeoning = false;
        } else {
            this.enemyTurn();
        }
        if (this.props.worldState.stats[1] <= 0) {
            state.currentEnemy[6] = false;
            state.currentEnemy[2] = state.currentEnemy[1];
            state.currentEnemy = null;
            state.dungeoning = false;
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
                default:
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
        }
    }

    render() {

        return (
            <div className="master">
                <div className="navigation">
                    <div className="plate">
                        <button disabled={this.state.dungeoning} className="escBtn" onClick={() => this.switchPages("Home")}>Back</button>
                    </div>
                </div>
                <div className="infobox">
                    <div className="mineItem">
                        <div>
                        {this.props.worldState.dungeons.map((dungeon, index) =>
                            <div key={dungeon.name}>
                                {this.props.worldState.triggerDungeons[index] &&
                                    <button disabled={this.state.dungeoning} key={dungeon.name+"Button"} onClick={() => (this.state.selectedDungeon !== index ?
                                        this.selectDungeon(index) : this.selectDungeon(null))}>{dungeon.name}</button>}
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <div className="infobox">
                    <div className="mineItem">
                        <div>
                            {this.state.selectedDungeon !== null ? this.props.worldState.dungeons[this.state.selectedDungeon].enemies.map((enem, index) => (
                                <div key={enem[0]+"Row"}>
                                    <button disabled={this.state.dungeoning} onClick={() => this.fightEnemy(index)}>{enem[0]}</button> Power: {enem[3]}, Defense: {enem[4]}
                                </div>
                            )) : <div className="nullRow">Select a Dungeon!</div>}
                        </div>
                    </div>
                </div>
                {this.state.dungeoning &&
                    <div className="infobox-small bottom-left">
                    <label className="info-title">{this.state.currentEnemy[0]}</label>
                        <div>
                            <label className="enemyHP">Health: {this.state.currentEnemy[2]}/{this.state.currentEnemy[1]}</label>
                            <label className="enemyStat">Damage: {this.state.currentEnemy[3]}</label>
                            <label className="enemyStat">Defense: {this.state.currentEnemy[4]}</label>
                            <label className="enemyStat">Drops: {this.state.currentEnemy[5]}</label>
                        </div>
                        <div>
                            <button className="battleAction" onClick={() => this.battle('attack')}>Attack!</button>
                            <button className="battleAction" onClick={() => this.battle('defend')}>Defend!</button>
                            <button className="battleAction" onClick={() => this.battle('run')}>Run!</button>
                        </div>
                        
                    </div>
                }
            </div>
        );
    }
}
