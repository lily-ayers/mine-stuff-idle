import React, { Component } from 'react';


 export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventorySlots: ["Head", "Chest", "Weapon", "Legs"]
        }
        this.switchPages = this.switchPages.bind(this);
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    equipItem = (index, typeIndex) => {
        if (this.props.worldState.equippedItems[typeIndex] !== null) {
            this.props.worldState.equippableItems[typeIndex].push(JSON.parse(JSON.stringify(this.props.worldState.equippedItems[typeIndex])));
        }
        this.props.worldState.equippedItems[typeIndex] = JSON.parse(JSON.stringify(this.props.worldState.equippableItems[typeIndex][index]));
        this.props.worldState.equippableItems[typeIndex].splice(index);
        this.forceUpdate();
    }

    render() {
        return (
            <div className="homepageMaster">
                <div className="statusBox">
                    <div className="statList">
                        {this.props.worldState.mines.map(
                            (mine, index) => 
                            (this.props.worldState.triggerMines[index] && 
                            <div className="mineItem" key={mine.name + "Title"} >
                                <p className="title-small">{mine.name}</p>
                                    <div className="materials" key={mine.name}>
                                        {mine.materials.map(
                                            mat => (
                                            <p key={mat[0]}>{mat[0]}: {mat[4]}</p>
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                        {(this.props.worldState.equippableItems[0].length > 0 ||
                        this.props.worldState.equippableItems[1].length > 0 ||
                        this.props.worldState.equippableItems[2].length > 0 ||
                        this.props.worldState.equippableItems[3].length > 0) &&
                            <div className="mineItem">
                                <p className="title-small">Equippables</p>
                                <div className="materials">
                                    {this.props.worldState.equippableItems.map(
                                        (type, typeIndex) =>
                                            type.map(
                                                (equip, index) =>
                                                <button key={equip.name} onClick={() => this.equipItem(index, typeIndex)}>Equip {equip.name}</button>
                                        )
                                    )}
                                </div>
                            </div>
                        }
                        {(this.props.worldState.equippedItems[0].name !== "empty" ||
                        this.props.worldState.equippedItems[1].name !== "empty" ||
                        this.props.worldState.equippedItems[2].name !== "empty" ||
                        this.props.worldState.equippedItems[3].name !== "empty") &&
                            <div className="mineItem">
                                <p className="title-small">Equipped</p>
                                <div className="materials">
                                    {this.props.worldState.equippedItems.map(
                                        (equip, index) =>
                                            <p key={this.state.inventorySlots[index]}>{this.state.inventorySlots[index]}: {equip.name}</p>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                
                <div className="navigation">
                    <div className="plate mineing">
                        <p>Want to Mine?</p>
                        <button onClick={() => this.switchPages("Mine")}>Go to the Mines!</button>
                    </div>
                    <div className="plate dungeoning">
                        <p>Want to Kill?</p>
                        <button onClick={() => this.switchPages("Dungeon")}>Go to the Dungeons!</button>
                    </div>
                    <div className="plate stroreing">
                        <p>Want to sell?</p>
                        <button onClick={() => this.switchPages("Store")}>Go to the Stores!</button>
                    </div>
                </div>
            </div>
        );
    }
}

