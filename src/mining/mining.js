import React, { Component } from 'react';
import { promised } from 'q';

import ProgressBar from '../layout/ProgressBar';

export class Mining extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMine: null,
            mining: false,
            progress: [null, null]
        }
        this.switchPages = this.switchPages.bind(this);
    }

    refreshMinerals = () => {
        
    }

    switchPages = (pageNum) => {
        this.props.selectPage(pageNum);
    }

    selectMine = (index) => {
        let state = this.state;
        state.selectedMine = index;
        this.setState(state);
        console.log(state);
    }

    toggleMining = (matIndex) => {
        let state = this.state;

        state.progress = [matIndex, 100];
        state.mining = !state.mining;
        this.setState(state);
        console.log(this.state);
    }

    mineMaterial = async (matIndex)  => {
        let mat = this.props.worldState.mines[this.state.selectedMine].materials[matIndex]
        let power = 1
        
        
        for (let equip of this.props.worldState.equippedItems)
            power += equip.power;
        if (mat[2] > 0) {
            if (power >= (mat[3])) {
                this.toggleMining(matIndex);

                //Progressbar calls

                await this.alterProgressBar(matIndex, (2000/(1 + (power - mat[3]))));

                mat[2]--;
                mat[4]++;
                this.forceUpdate();
                this.toggleMining();
            } else {
                console.log('Not enough power!');
            }
        } else {
            console.log('No Ore left!');
        }

        
    }

      alterProgressBar = async (index, time) => {
        //for altering the different progress bars
        for(let i = 100; i > 0; i--){
            await this.delay(time);
            let state = this.state;
            state.progress[1] = i;
            this.setState(state);
        }

        let state = this.state;
        state.progress = [null,null];
        this.setState(state);

        return true;
    }

     delay = (time) => {
        let delay = time/100;
        return new Promise(resolve => setTimeout(resolve,delay ));
    }



    render() {
        return (
            <div className="master">
                <div className="navigation">
                    <div className="plate">
                        <button className="escBtn" onClick={() => this.switchPages("Home")}>Back</button>
                    </div>
                </div>
                <div className="mineSelect infobox">
                     <div className="mines">
                        <div>
                        {this.props.worldState.mines.map((mine, index) =>
                            <div className="mineItem" key={mine.name}>
                                {this.props.worldState.triggerMines[index] &&
                                <div key={mine.name+"Cell"}>
                                    <button key={mine.name+"Button"} onClick={() => (this.state.selectedMine !== index ?
                                        this.selectMine(index) : this.selectMine(null))}>{mine.name}</button>
                                </div>}
                            </div>
                        )}
                        </div>
                    </div> 
                    
                </div>
                    <div className="materialList infobox-large ">
                        <div className="materialsInMine">
                            <div >
                                {this.state.selectedMine !== null ? this.props.worldState.mines[this.state.selectedMine].materials.map((mat, index) => (
                                    <div className=" mineItem" key={mat[0]+"Row"}>
                                        <p key={mat[0]+"Cell"}><button disabled={this.state.mining} onClick={() => this.mineMaterial(index)}>{mat[0]}</button> {mat[2]}/{mat[1]} remaining. difficulty: {mat[3]}</p>
                                        {this.state.progress[0] === index && 
                                            <ProgressBar percent={this.state.progress[1]}/>    
                                        }
                                    </div>
                                )) : <p className="nullRow">Select a Mine!</p>}
                            </div>
                        </div>
                    </div>                
            </div>
        );
    }
}
