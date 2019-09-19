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
        for (let slot = 0; slot < 4; slot++) {
            // 0:MaxHealth, 1:Health. 2:Power, 3:Damage, 4:Defense, 5:Money
            switch (stat) {
                case "0":
                    return this.props.worldState[this.props.era].equippedInventory[slot].power;
                    break;
                case "1":
                    return this.props.worldState[this.props.era].equippedInventory[slot].damage;
                    break;
                case "2":
                    return this.props.worldState[this.props.era].equippedInventory[slot].defense;
                    break;
                case "3":
                    return this.props.worldState[this.props.era].equippedInventory[slot].weight;
                    break;
            }
        }
    }
    
    changeEra = (era) => {
        this.props.changeEra(era)
    }

    render(){
        return (
            <div style={this.props.font} className="navbar default-nav">
                <div className="playerStatDisplay">
                    <label className="playerStat">Health: {this.props.worldState[this.props.era].stats[1] + "/" + this.props.worldState[this.props.era].stats[0]}</label>
                    <label className="playerStat">Power: {this.props.worldState[this.props.era].stats[2]}</label>
                    <label className="playerStat">Damage: {this.props.worldState[this.props.era].stats[3]}</label>
                    <label className="playerStat">Defense: {this.props.worldState[this.props.era].stats[4]}</label>
                    <label className="playerStat">{this.props.worldState[this.props.era].currency}: {this.props.worldState[this.props.era].stats[5]}</label>
                </div>
                <div className="dropdown default" id="dropdown" onClick={() => this.handleClick()}>
                    <img src={Logo} alt="logo" className="icon" />
                    {this.props.worldState.map((era, index) =>
                        <div key={era.name + "div"} className="listItem right default">
                            <p key={era.name + "name"} className="header-small default" >{era.name}</p>
                            <button key={era.name + "button"} className="dropdown-btn" onClick={() => this.changeEra(index)}>Warp!</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
};

export default Navbar;