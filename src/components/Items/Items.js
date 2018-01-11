import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Items extends Component {

    handleConsumeItem(name, index) {
        switch(name) {
            case 'Health':
                // Check if item exists
                if (this.props.playerItems[index][name] > 0) {
                    // If pokemon already has full health
                    if (this.props.playerPokemon[this.props.activePlayerPokemon].maxHealth === this.props.playerPokemon[this.props.activePlayerPokemon].currentHealth) {
                        return;
                    } else {
                        // Decrease item inventory
                        this.props.consumeItem(name, index);
                        // Discontinue players turn after using item
                        this.props.updateActiveStatus(false);
                        // Close bag menu
                        this.props.closeBag();
                        // Increase pokemon health by 20 points
                        this.props.increaseHealth();
                        // Display message
                        let message = `PLAYER used ${name.toUpperCase()}`;
                        this.props.updatePromptMessage(message);
                        setTimeout(() => {
                            this.props.fight();
                        }, 3000);
                    };
                };
                break;
            default: 
                return;
        }
    }
    
    render() {
        const items = this.props.playerItems.map((item, index) => {
            for (let key in item) {
                return (
                    <div className="row" key={index}>
                        <button value={key} index={index} onClick={() => this.handleConsumeItem(key, index)}>{key} X {item[key]}</button>
                    </div>
                )
            }
        })
        return (
            <div className="actionMenuInner">
                {items}
                <div className="row">
                    <button onClick={() => this.props.closeBag()}>Close Bag</button>
                </div>
            </div>
        )

    };
};

const mapStateToProps = state => {
    return {
        playerItems: state.player.items,
        playerPokemon: state.player.pokemon,
        activePlayerPokemon: state.player.activePokemon
    };
};

const mapStateToDispatch = dispatch => {
    return {
        consumeItem: (itemName, itemIndex) => dispatch(actions.consumeItem(itemName, itemIndex)),
        increaseHealth: () => dispatch(actions.increaseHealth()),
        updateActiveStatus: (status) => dispatch(actions.updateActiveStatus(status)),
        updatePromptMessage: (msg) => dispatch(actions.updatePromptMessage(msg)),
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(Items);