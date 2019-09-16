import React,{ Component } from 'react';
import Logo from './resources/icon-dropdown.png';

class Navbar extends Component {

handleClick(){
    let elem = document.getElementById("dropdown");
    if(elem.className === "dropdown default"){
        elem.className = "dropdown-open default";
    }else{
        elem.className = "dropdown default";
    }
}

render(){
    return (
        <div className="navbar">
            <div className="dropdown default" id="dropdown" onClick={() => this.handleClick()}>
                <img src={Logo} alt="logo" className="icon" />
                <div className="listItem right default">
                    <p className="header-small default" >Mine Name</p>
                    <button >Mine!</button>
                </div>
            </div>
        </div>
    )
}
};

export default Navbar;