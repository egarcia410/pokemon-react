import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './Prompt.css';

class Prompt extends Component {

    componentWillMount() {
        let name = this.props.user.name;
        this.props.initialPrompt(name);
    };

    render() {
        return (
            <div className="col-12 col-md-8 promptBox">
                <h1>{this.props.status.promptMessage}</h1>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        user: state.user,
        opp: state.opponent,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initialPrompt: (name) => dispatch(actions.initialPrompt(name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);