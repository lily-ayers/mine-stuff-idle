import React, { Component } from 'react';
import { CraftingTooltip } from './crafting-tooltip'
import Crafting from '../crafting';
import Items from '../items';

 export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventorySlots: ["Head", "Chest", "Weapon", "Legs"],
            renderTooltip: false,
            tooltipDetails: null
        }
        this.switchPages = this.switchPages.bind(this);
    }

    triggerTooltip = (details) => {
        let state = this.state;
        if (state.renderTooltip && state.tooltipDetails === details) {
                state.renderTooltip = !state.renderTooltip;
        } else {
            state.renderTooltip = true;
            state.tooltipDetails = details;
        }
        this.setState(state);
    }

    getCraftingArray = (material) => {
        const craftables = [];
        for (let craft of Crafting) {
            const craftDeepCopy = JSON.parse(JSON.stringify(craft))
            let filtered = craftDeepCopy.requiredMaterials.filter(data => data.name === material.name)
            if (filtered.length > 0) {
                craftables.push(craft);
            }
        }
        return craftables;
    }

    renderCrafting = (detailsArray) => {
        const canCraft = [];
        const names = [];
        const requiredMaterials = [];
        for (let details of detailsArray) {
            names.push(details.name)
            requiredMaterials.push(details.requiredMaterials)
            let tempCanCraft = false;
            for (let mat of details.requiredMaterials) {
                if (details.eraAvailable == this.props.era) {
                    const heldMat = this.findMat(mat)
                    if (heldMat !== null && heldMat.amountHeld >= mat.amount) {
                        tempCanCraft = true
                    } else {
                        tempCanCraft = false;
                        console.log("cannot craft")
                        break;
                    }
                }
            }
            canCraft.push(tempCanCraft)
        }
        const craftables = {results: names, materials: requiredMaterials, available: canCraft};
        return <CraftingTooltip craftables={craftables} craftItem={(index) => this.craftItem(detailsArray[index])}/> 
    }

    craftItem = (details) => {
        for (let mat of details.requiredMaterials) {
            let heldMat = this.findMat(mat);
            if (heldMat[4] < mat.amount) {
                return;
            }
            heldMat -= mat.amount;
        }
        let item = Items.find(data => data.name === details.name)
        switch (item.type) {
            case "Equippable":
                let slot;
                switch (item.slot) {
                    case "Head":
                        slot = 0;
                        break;
                    case "Chest":
                        slot = 1;
                        break;
                    case "Weapon":
                        slot = 2;
                        break;
                    case "Legs":
                        slot = 3;
                        break;
                    }
                    if (this.props.worldState[this.props.era].equippedItems[slot].name !== item.name) {
                        this.props.worldState[this.props.era].equippableItems[slot].push(item);
                        this.props.worldState[this.props.era].equippableItems[slot] = [...new Set(this.props.worldState[this.props.era].equippableItems[slot])];
                    }
                break;
            case "Consumable":
                let consumableFound = false;
                for (let consumable of this.props.worldState[this.props.era].consumables) {
                    if (consumable.name === item.name) {
                    consumable.amountHeld++;
                    consumableFound = true;
                }
                }
                if (!consumableFound) {
                    this.props.worldState[this.props.era].consumables.push(item)
                }
                break;
            case "Other":
                let otherFound = false;
                for (let material of this.props.worldState[this.props.era].otherMaterials) {
                    if (material.name === item.name) {
                        material.amountHeld++;
                        otherFound = true;
                    }
                }
                if (!otherFound) {
                    this.props.worldState[this.props.era].otherMaterials.push(item)
                }
                break;
        }
        if (item.triggers) {
            for (let triggerIndex of item.triggers) {
                this.props.worldState[this.props.era].triggerMines[triggerIndex] = !this.props.worldState[this.props.era].triggerMines[triggerIndex];
                this.props.worldState[this.props.era].triggerDungeons[triggerIndex] = !this.props.worldState[this.props.era].triggerDungeons[triggerIndex];
            }
        }
        this.forceUpdate();
    }

    findMat = (mat) => {
        for (let i = 0; i < 5; i++) {
            for (let mine of this.props.worldState[i].mines) {
                for (let material of mine.materials) {
                    if (mat.name === material.name) {
                        return material;
                    }
                }
            }
            for (let material of this.props.worldState[i].otherMaterials) {
                if (mat.name === material.name) {
                    return material;
                }
            }
        }
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    equipItem = (index, typeIndex) => {
        if (this.props.worldState[this.props.era].equippedItems[typeIndex].name !== "empty") {
            this.props.worldState[this.props.era].equippableItems[typeIndex].push(JSON.parse(JSON.stringify(this.props.worldState[this.props.era].equippedItems[typeIndex])));
        }
        this.props.worldState[this.props.era].equippedItems[typeIndex] = JSON.parse(JSON.stringify(this.props.worldState[this.props.era].equippableItems[typeIndex][index]));
        this.props.worldState[this.props.era].equippableItems[typeIndex].splice(index, 1);
        this.props.worldState[this.props.era].equippableItems[typeIndex] = [...new Set(this.props.worldState[this.props.era].equippableItems[typeIndex])];
        this.forceUpdate();
    }

    render() {
        return (
            <div className="homepageMaster">
                <div className="statusBox">
                    <div className="statList">
                        {this.props.worldState[this.props.era].mines.map(
                            (mine, index) => 
                            (this.props.worldState[this.props.era].triggerMines[index] && 
                            <div className="mineItem" key={mine.name + "Title"} >
                                <p className="title-small">{mine.name}</p>
                                    <div className="materials" key={mine.name}>
                                        {mine.materials.map(
                                            mat =>
                                            <div key={mat.name} className="materialPlate">
                                                {this.props.worldState[this.props.era].workers.length > 0 &&
                                                    <div className="assignWorker">
                                                        <label>Assigned Workers:</label>
                                                        <select defaultValue={this.props.worldState[this.props.era].workers.includes(data => data.assignment === mat.name) ? this.props.worldState[this.props.era].workers.find(data => data.assignment === mat.name) : ""} onChange={(opt) => this.assignWorker(opt.target.value, mat)}>
                                                            <option value="">None</option>
                                                            {this.props.worldState[this.props.era].workers.map((worker, index) =>
                                                                <option key={worker.name + index} value={worker}>{worker.name}</option>
                                                            )}
                                                        </select>
                                                    </div>
                                                }
                                                <p onClick={() => this.triggerTooltip(mat)} key={mat.name}>{mat.name}: {mat.amountHeld}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                        {(this.props.worldState[this.props.era].equippableItems[0].length > 0 ||
                        this.props.worldState[this.props.era].equippableItems[1].length > 0 ||
                        this.props.worldState[this.props.era].equippableItems[2].length > 0 ||
                        this.props.worldState[this.props.era].equippableItems[3].length > 0) &&
                            <div className="mineItem">
                                <p className="title-small">Equippables</p>
                                <div className="materials">
                                    {this.props.worldState[this.props.era].equippableItems.map(
                                        (type, typeIndex) =>
                                            type.map(
                                                (equip, index) =>
                                                <button key={index + equip.name} onClick={() => this.equipItem(index, typeIndex)}>Equip {equip.name}</button>
                                        )
                                    )}
                                </div>
                            </div>
                        }
                        {(this.props.worldState[this.props.era].equippedItems[0].name !== "empty" ||
                        this.props.worldState[this.props.era].equippedItems[1].name !== "empty" ||
                        this.props.worldState[this.props.era].equippedItems[2].name !== "empty" ||
                        this.props.worldState[this.props.era].equippedItems[3].name !== "empty") &&
                            <div className="mineItem">
                                <p className="title-small">Equipped</p>
                                <div className="materials">
                                    {this.props.worldState[this.props.era].equippedItems.map(
                                        (equip, index) =>
                                            <p key={this.state.inventorySlots[index]}>{this.state.inventorySlots[index]}: {equip.name}</p>
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {this.props.worldState[this.props.era].consumables.length > 0 &&
                            <div className="mineItem">
                                <p className="title-small">Consumables</p>
                                <div className="materials">
                                    {this.props.worldState[this.props.era].consumables.map(
                                        (consume, index) =>
                                            <p key={consume.name}>{consume.name}: {consume.amountHeld}</p>
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {this.props.worldState[this.props.era].otherMaterials.length > 0 &&
                            <div className="mineItem">
                                <p className="title-small">Other Materials</p>
                                <div className="materials">
                                    {this.props.worldState[this.props.era].otherMaterials.map(
                                        (other, index) =>
                                            <p key={other.name}>{other.name}: {other.amountHeld}</p>
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
                        <p>Want to Sell?</p>
                        <button onClick={() => this.switchPages("Store")}>Go to the Stores!</button>
                    </div>
                    <div className="plate employering">
                        <p>Want to Hire?</p>
                        <button onClick={() => this.switchPages("Employ")}>Go to Craigslist!</button>
                    </div>
                    {this.state.renderTooltip && 
                        <div className="crafting">
                            {this.renderCrafting(this.getCraftingArray(this.state.tooltipDetails))}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

