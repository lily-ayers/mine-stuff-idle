import React, { Component } from 'react';
import './employering.scss';

 export class Employering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: this.props.names,
            worker: null,
            currentWorkerCost: 100,
            availableLevels: []
        }
        this.generateWorker(1);
        this.switchPages = this.switchPages.bind(this);
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum)
    }

    editWorkerName(worker, newName) {
        worker.name = newName;
    }

    refresh = () => {
        this.generateWorker(1);
        this.forceUpdate();
    }
  
    generateWorker(workerLevel) {
        let state = this.state;
        let index = Math.floor(Math.random() * state.names.length)
        let newWorker = {
            name: state.names.splice(index, 1)[0],
            power: +Math.floor(Math.random() * workerLevel * 2),
            damage: +Math.floor(Math.random() * workerLevel * 2),
            speed: +Math.floor(Math.random() * workerLevel * 2),
            assignedJob: "",
            assignment: "",
            assignedLocation: "",
            progress: 0,
            returning: false,
            heldMaterial: ""
        }
        state.worker = newWorker;
        state.currentWorkerCost = Math.pow(100, workerLevel);
        this.state = state;
        console.log(newWorker)
    }

    hireWorker = () => {
        this.props.worldState.workers.push(this.state.worker)
        this.generateWorker(1);
        console.log(this.props.worldState.workers)
        this.forceUpdate();
    }

    getAvailableLevels = () => {
        let available = [];
        for (let i = 1; i < 100; i++) {
            if (this.props.worldState.stats[6] >= Math.pow(100, i)) {
                available.push(i);
            } else {
                break;
            }
        }
        let state = this.state;
        state.availableLevels = available;
        this.setState(state);
    }

    assign = (worker, selection, tier) => {
        switch (tier) {
            case "Job":
                worker.assignedJob = selection;
                worker.assignedLocation = "";
                worker.assignment = "";
                break;
            case "Location":
                worker.assignedLocation = selection;
                worker.assignment = "";
                break;
            case "Target":
                worker.assignment = selection;
                break;
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div className="employ">
                <div className="smallPlate">
                    <button className="escBtn" onClick={() => this.switchPages("Home")}>Back</button>
                </div>
                <div className="hire">
                    <button className="refresh" onClick={() => this.refresh()}>Refresh</button>
                    {this.state.availableLevels.length > 0 && 
                        <select className="hireLevelSelector">
                            {this.state.availableLevels.map(level => 
                                <option>Level {level} (Costs {})</option>    
                            )}
                        </select>
                    }
                    <hr/>
                    <p className="name">Name: {this.state.worker.name}</p>
                    <p className="stat">Power: {this.state.worker.power}</p>
                    <p className="stat">Damage: {this.state.worker.damage}</p>
                    <p className="stat">Speed: {this.state.worker.speed}</p>
                    <p className="cost">Cost: {this.state.currentWorkerCost}</p>
                    <button disabled={this.state.availableLevels.length <= 0} onClick={() => this.hireWorker()}>Hire!</button>
                </div>
                <div className="employedList">
                    {this.props.worldState.workers.map((worker, index) =>
                        <div key={index} className="employee">
                            <p key={worker + index} className="name">{worker.name}</p>
                            <p key={worker + index + "power"} className="stat">Power: {worker.power}</p>
                            <p key={worker + index + "damage"} className="stat">Damage: {worker.damage}</p>
                            <p key={worker + index + "speed"} className="stat">Speed: {worker.speed}</p>
                            <label>Assign!</label>
                            <label>Job: {worker.assignedJob}</label>
                                <select  defaultValue={worker.assignedJob} onChange={(val) => this.assign(worker, val.target.value, "Job")}>
                                    <option value="">None</option>
                                    <option value="Mining">Mining</option>
                                    <option value="Dungeoning">Dungeoning</option>
                                </select>
                            {worker.assignedJob !== "" &&
                                <label>Location: {worker.assignedLocation}
                                    <select defaultValue={worker.assignedLocation} onChange={(val) => this.assign(worker, val.target.value, "Location")}>
                                        <option value="">None</option>
                                        {(worker.assignedJob === "Mining" && this.props.worldState.mines.map(mine => 
                                            <option key={mine.name} value={mine.name}>{mine.name}</option>    
                                        )) || (worker.assignedJob === "Dungeoning" && this.props.worldState.dungeons.map(dungeon => 
                                            <option key={dungeon.name} value={dungeon.name}>{dungeon.name}</option>    
                                        ))}
                                    </select>
                                </label>
                            }
                            {worker.assignedLocation !== "" &&
                                <label>Target: {worker.assignment}
                                    <select defaultValue={worker.assignment} onChange={(val) => this.assign(worker, val.target.value, "Target")}>
                                        <option value="">None</option>
                                        {(worker.assignedLocation === "Mining" && this.props.worldState.mines.find(data => data.name === worker.assignedLocation).materials.map(mat => 
                                            <option key={mat.name} value={mat[0]}>{mat[0]}</option>    
                                        )) || (worker.assignedLocation === "Dungeoning" && this.props.worldState.dungeons.find(data => data.name === worker.assignedLocation).enemies.map(enem => 
                                            <option key={enem.name} value={enem[0]}>{enem[0]}</option>    
                                        ))}
                                    </select>
                                </label>
                            }
                            {worker.assignment !== "" &&
                                (worker.returning ? <label>Returning</label> : <label>{worker.assignedJob}</label>)}
                                <label>Progress: {worker.progress}</label>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

