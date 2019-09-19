import React,{ Component} from 'react';
import Filler from './Filler';

class ProgressBar extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className="progress">
                <p>Mining </p>
                <Filler percent={this.props.percent}/>
            </div>
        )
    };
}


export default ProgressBar;