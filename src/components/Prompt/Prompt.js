import React from 'react';
import './Prompt.css';

const prompt = (props) => {
    if (props.active) {
        return (
            <div className="col-12 col-md-8 promptBox">
                <h1>What will {props.user.name.toUpperCase()} do?</h1>
            </div>
        )
    }
    return (
        <div className="col-12 col-md-8 promptBox">
            {props.opponent.name.toUpperCase()}
            {/* <h1>{props.data.name.toUpperCase()} used {props.attack.toUpperCase()}</h1> */}
        </div>      
    )
}

export default prompt;