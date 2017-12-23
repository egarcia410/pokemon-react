import React, { Component } from 'react';
import { connect } from 'react-redux';

import './StatusMenu.css';

class StatusMenu extends Component {

    convertHealth = (player) => {
        let health = player.currentHealth;
        if (health < 0) {
            return 0;
        }
        let percentageDecrease = (health / player.fullHealth) * 100;
        return percentageDecrease;
    }

    render() {
        if (this.props.isUser) {
            return (
                <div className="statusBar col-12 col-md-4">
                    <div className="topStatusBar">
                        <div className="nameType">
                            <h1 className="name">{this.props.user.name} <span className="type">{this.props.user.type[0]}</span> </h1>
                        </div>
                        <h2 className="level">Lv {this.props.user.level}</h2>
                    </div>
                    <div className="bottomStatusBar">
                        <div style={{ width: this.convertHealth(this.props.user) + '%' }} className="healthBar">HP {this.props.user.currentHealth}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="statusBar col-12 col-md-4">
                    <div className="topStatusBar">
                        <div className="nameType">
                            <h1 className="name">{this.props.opp.name} <span className="type">{this.props.opp.type[0]}</span> </h1>
                        </div>
                        <h2 className="level">Lv {this.props.opp.level}</h2>
                    </div>
                    <div className="bottomStatusBar">
                        <div style={{ width: this.convertHealth(this.props.opp) + '%' }} className="healthBar">HP {this.props.opp.currentHealth}</div>
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.user,
        opp: state.opponent
    };
};

export default connect(mapStateToProps)(StatusMenu);