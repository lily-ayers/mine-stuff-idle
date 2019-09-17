import React from  'react';

const Filler = (props) => {
    return(
        <div className="bar" style={{width: `${props.percent}%` }}/>
    )
}

export default Filler;