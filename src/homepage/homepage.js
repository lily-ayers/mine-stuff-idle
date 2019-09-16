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

