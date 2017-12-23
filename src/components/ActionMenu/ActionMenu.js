import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import './ActionMenu.css';

class ActionMenu extends Component {

    performAction = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case 'fight':
                this.reduceHealth(this.state.user, this.state.opponent);
                break;
            case 'bag':
                break;
            case 'pokemon':
                break;
            case 'run':
                break;
            default:
                console.log('Something went wrong!')
        }
    }

    render() {
        return (
            <div className="col-12 col-md-4 actionBox">
                <div className="row">
                    <div className="col-6">
                        {this.props.active 
                            ? <button name="fight" onClick={() => this.props.reduceHealth(this.props.user, this.props.opp)}>FIGHT</button>
                            : <button disabled name="fight">FIGHT</button>
                        }
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                            : <button disabled name="fight">BAG</button>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>POKeMON</button>
                            : <button disabled name="fight">POKeMON</button>
                        }
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                            : <button disabled name="fight">BAG</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        opp: state.opponent,
        active: state.activeTurn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduceHealth: (user, opp) => dispatch(actionCreators.reduceHealth(user, opp))
    }                                    
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);