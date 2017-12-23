import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Prompt.css';
import _ from 'lodash';

class Prompt extends Component {

    attack = () => {
        console.log('attack function')
        return _.sample(this.props.opp.abilities).toUpperCase();
    }

    render() {
        if (this.props.active) {
            return (
                <div className="col-12 col-md-8 promptBox">
                    <h1>What will {this.props.user.name.toUpperCase()} do?</h1>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-md-8 promptBox">
                    <h1>{this.props.opp.name.toUpperCase()} used {this.attack()}!</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        opp: state.opponent,
        active: state.activeTurn
    }
}

export default connect(mapStateToProps)(Prompt);