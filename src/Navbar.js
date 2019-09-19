import React,{ Component } from 'react';
import Logo from './resources/icon-dropdown.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(){
        let elem = document.getElementById("dropdown");
        if(elem.className === "dropdown default"){
            elem.className = "dropdown-open default";
        }else{
            elem.className = "dropdown default";
        }
    }

    getEquip = (stat) => {
        let equipStats = 0;
        for (let slot = 0; slot < 3; slot++) {
            switch (stat) {
                case 0:
                    equipStats += this.props.worldState[this.props.era].equippedItems[slot].power;
                    break;
                case 1:
                    equipStats += this.props.worldState[this.props.era].equippedItems[slot].damage;
                    break;
                case 2:
                    equipStats += this.props.worldState[this.props.era].equippedItems[slot].defense;
                    break;
            }
        }
        return equipStats;
    }
    
    changeEra = (era) => {
        this.props.changeEra(era);
        this.forceUpdate();
    }

    render(){
        return (
            <div className="navbar default-nav">
                <div style={this.props.font[this.props.era]} className="playerStatDisplay">
                    <label className="playerStat">Health: {this.props.worldState[this.props.era].stats[1] + "/" + this.props.worldState[this.props.era].stats[0]}</label>
                    <label className="playerStat">Power: {this.props.worldState[this.props.era].stats[2]}{this.getEquip(0) >= 1 && "(+" + this.getEquip(0) + ")"}</label>
                    <label className="playerStat">Damage: {this.props.worldState[this.props.era].stats[3]}{this.getEquip(1) >= 1 && "(+" + this.getEquip(1) + ")"}</label>
                    <label className="playerStat">Defense: {this.props.worldState[this.props.era].stats[4]}{this.getEquip(2) >= 1 && "(+" + this.getEquip(2) + ")"}</label>
                    <label className="playerStat">{this.props.worldState[this.props.era].currency}: {this.props.worldState[this.props.era].stats[5]}</label>
                </div>
                <div className="dropdown default" id="dropdown" onClick={() => this.handleClick()}>
                    <img src={Logo} alt="logo" className="icon" />
                    {this.props.worldState.map((era, index) =>
                        <div key={index}>
                            {index !== this.props.era && 
                                <div key={era.name + "div"} style={this.props.font[index]} className="listItem right default">
                                    <p key={era.name + "name"} className="header-small default" >{era.name}</p>
                                    <button key={era.name + "button"} className="dropdown-btn" onClick={() => this.changeEra(index)}>Warp!</button>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }
};

export default Navbar;