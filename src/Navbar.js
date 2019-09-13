import React from 'react';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <button>Home</button>
            <div className="dropdown">
                <div className="listItem">
                    <p className="header-small">Mine Name</p>
                </div>
            </div>
        </div>
    )
};

export default Navbar;