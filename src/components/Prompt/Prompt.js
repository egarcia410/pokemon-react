import React from 'react';
import './Prompt.css';
import _ from 'lodash';

const prompt = (props) => {

    let attack = _.sample(props.opponent.abilities);

    if (props.active) {
        return (
            <div className="col-12 col-md-8 promptBox">
                <h1>What will {props.user.name.toUpperCase()} do?</h1>
            </div>
        )
    }
    return (
        <div className="col-12 col-md-8 promptBox">
            <h1>{props.opponent.name.toUpperCase()} used {attack.toUpperCase()}!</h1>
        </div>
    )
}

export default prompt;