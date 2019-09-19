import React, { Component } from 'react';
import Items from '../items';

 export class Storeing extends Component {
    constructor(props) {
        super(props);

        this.switchPages = this.switchPages.bind(this);
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    sellItem = (index, array) => {
        if (array[index].amountHeld > 0) {
            array[index].amountHeld--;
            this.props.worldState.stats[5] += array[index].price;
            this.forceUpdate()
        }
    }

    // Add logic to prevent multiple workers on same material
    // Finish Store Component and add Selling Logic

    render() {
        return (
            <div className="storeingMaster">
                <div className="smallPlate">
                    <button className="escBtn" onClick={() => this.switchPages("Home")}>Back</button>
                </div>
                <div className="statusBox">
                    {this.props.worldState.mines.map(
                        (mine, index) => 
                        (this.props.worldState.triggerMines[index] && 
                        <div className="mineItem" key={mine.name + "Title"} >
                            <p className="title-small">{mine.name}</p>
                                <div className="materials" key={mine.name}>
                                    {mine.materials.map(
                                        (mat, matIndex) =>
                                        <div className="materialPlate">
                                            {mat.amountHeld > 0 &&
                                                <div className="sellMaterial">
                                                    <label>{mat.name}: {mat.amountHeld}</label>
                                                    <button onClick={() => this.sellItem(matIndex, mine.materials)}>Sell for {mat.price + " " + this.props.worldState.currency}</button>
                                                </div>
                                            }
                                        </div>
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
                                            <div className="materialPlate">
                                                {(equip.amountHeld > 0) &&
                                                    <div className="sellMaterial">
                                                        <label>{equip.name}: {equip.amountHeld}</label>
                                                        <button onClick={() => this.sellItem(index, type)}>Sell for {equip.price + " " + this.props.worldState.currency}</button>
                                                    </div>
                                                }
                                            </div>
                                    )
                                )}
                            </div>
                        </div>
                    }
                    {this.props.worldState.consumables.length > 0 &&
                        <div className="mineItem">
                            <p className="title-small">Consumables</p>
                            <div className="materials">
                                {this.props.worldState.consumables.map(
                                    (consume, index) =>
                                    <div className="materialPlate">
                                        {(consume.price && consume.amountHeld > 0) &&
                                            <div className="sellMaterial">
                                                <label>{consume.name}: {consume.amountHeld}</label>
                                                <button onClick={() => this.sellItem(index, this.props.worldState.consumables)}>Sell for {consume.price + " " + this.props.worldState.currency}</button>
                                            </div>
                                        }
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    }
                    {this.props.worldState.otherMaterials.length > 0 &&
                        <div className="mineItem">
                            <p className="title-small">Other Materials</p>
                            <div className="materials">
                                {this.props.worldState.otherMaterials.map(
                                    (other, index) =>
                                    <div className="materialPlate">
                                        {(other.price && other.amountHeld > 0) &&
                                            <div className="sellMaterial">
                                                <label>{other.name}: {other.amountHeld}</label>
                                                <button onClick={() => this.sellItem(index, this.props.worldState.otherMaterials)}>Sell for {other.price + " " + this.props.worldState.currency}</button>
                                            </div>
                                        }
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

