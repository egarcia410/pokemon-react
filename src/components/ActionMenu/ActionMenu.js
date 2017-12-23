import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ActionMenu.css';

class ActionMenu extends Component {

    reduceHealth = (usr, opp) => {
        let health1 = usr.currentHealth;
        let health2 = opp.currentHealth;

        let reducedHealth1 = health1 - opp.attack;
        let reducedHealth2 = health2 - usr.attack;

        let opponent = { ...opp };
        opponent.currentHealth = reducedHealth1;
        this.setState({ opponent })
        this.setState({
            activeTurn: false
        });

        setTimeout(() => {
            let user = { ...usr };
            user.currentHealth = reducedHealth2;
            this.setState({ user })
            this.setState({
                activeTurn: true
            });
        }, 2000);
    }

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
                        ? <button name="fight" onClick={(e) => this.performAction(e)}>FIGHT</button>
                        : <button disbaled name="fight" onClick={(e) => this.performAction(e)}>FIGHT</button>
                        }
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                            : <button disbaled name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>POKeMON</button>
                            : <button disbaled name="fight" onClick={(e) => this.performAction(e)}>POKeMON</button>
                        }
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        {this.props.active
                            ? <button name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                            : <button disbaled name="fight" onClick={(e) => this.performAction(e)}>BAG</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        active: state.activeTurn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduceHealth: () => dispatch({type: 'REDUCE_HEALTH'})
    }
}

export default connect(mapStateToProps)(ActionMenu);