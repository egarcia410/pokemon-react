import React, { Component } from 'react';
import StatusMenu from '../../components/StatusMenu/StatusMenu';
import Pokemon from '../../containers/Pokemon/Pokemon';
import Prompt from '../../containers/Prompt/Prompt';
import ActionMenu from '../../components/ActionMenu/ActionMenu';

import './Battle.css';

class Battle extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="battleArena">
                    {/* Opponent */}
                    <div className="row">
                        <StatusMenu/>
                        <Pokemon/>
                    </div>
                    {/* User */}
                    <div className="row" style={{alignItems: 'flex-end'}}>
                        <Pokemon isUser={true}/>
                        <StatusMenu isUser={true}/>
                    </div>
                </div>
                {/* Prompt & Actions */}
                <div className="row">
                    <Prompt/>
                    <ActionMenu/>
                </div>
            </div>
        )
    }
}

export default Battle;