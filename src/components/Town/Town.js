import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import PokemonService from '../../services/PokemonService';
import Pokemon from '../../entities/Pokemon';
import _ from 'lodash';

import Tree from '../../images/town/tree1.png';

import './Town.css';

class Town extends Component {

    
    componentWillMount() {
        document.addEventListener("keydown", this.action);
    }

    componentWillUnount() {
        document.removeEventListener("keydown", this.action);
    }

    action = (e) => {
        switch (e.keyCode) {
            case 37:
                this.moveLeft();
                break;
            case 38:
                this.moveUp();
                break;
            case 39:
                this.moveRight();
                break;
            case 40:
                this.moveDown();
                break;
            default: return;
        };
    };

    moveLeft = () => {
        this.move(this.props.rowPos, this.props.colPos - 1); 
    };

    moveRight = () => {
        this.move(this.props.rowPos, this.props.colPos + 1);
    };

    moveUp = () => {
        this.move(this.props.rowPos - 1, this.props.colPos);
    }

    moveDown = () => {
        this.move(this.props.rowPos + 1, this.props.colPos);
    };

    move(rowPos, colPos) {
        const tile = this.props.map[rowPos][colPos];
        this.props.updatePlayerPosition(rowPos, colPos);
        // Enter Store
        if (tile === 'ST') {
            console.log('Store')
        }
        // Enter Gym
        if (tile === 'GL') {
            console.log('Gym Leader')
        }
        // Walking around in tall grass
        if (tile === 'TG') {
            let randomNum = Math.floor(Math.random() * 101);
            // Common Pokemon Encountered
            if (randomNum  < 60) {
                // Find random Common pokemon from database
                PokemonService.getPokemonByRarity('common')
                    .then(result => {
                        // Select random pokemon from rarity list
                        let randPokemon = _.sample(result.data);
                        // Create enemy pokemon instance
                        let pokemon = new Pokemon(
                            randPokemon.id,
                            randPokemon.name,
                            randPokemon.type,
                            randPokemon.health,
                            randPokemon.health,
                            randPokemon.attackDamage,
                            randPokemon.attackName,
                            randPokemon.catchRate,
                            randPokemon.xp,
                            randPokemon.level
                        )
                        this.props.addOppPokemon(pokemon);
                        this.props.history.replace('/battle');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }

    renderTown = () => {
        return this.props.map.map((row, rowIndex) => {
            return (
                <div className="row" key={rowIndex}>
                    {this.renderColumn(row, rowIndex)}
                </div>
            )
        });
    };

    renderColumn = (row, rowIndex) => {
        return row.map((col, colIndex) => {
            let tileType = this.props.map[rowIndex][colIndex];
            let source = '';
            // Renders image for tile
            switch (tileType) {
                case 'TR': // Tree Image Border
                    source = Tree
                    break;
                default:
                    break;
            }
            // Locates player on town map
            if (rowIndex === this.props.rowPos && colIndex === this.props.colPos) {
                tileType = 'Player';
            }
            if (source) {
                return (
                    <div className={`${tileType} tile`} key={`${rowIndex}-${colIndex}`}>
                        <img className="img-fluid" src={source} alt={tileType}/>
                    </div>
                )
            } else {
                return (
                    <div className={`${tileType} tile`} key={`${rowIndex}-${colIndex}`}></div>
                )
            }
        });
    };

    render() {
        return (
            <div className="container-fluid townWrapper">
                <h1>Pallet Town</h1>
                <div className="town">
                    {this.renderTown()}
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        map: state.town.map,
        rowPos: state.town.rowPos,
        colPos: state.town.colPos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePlayerPosition: (row, col) => dispatch(actions.updatePlayerPosition(row, col)),
        addOppPokemon: (pokemon) => dispatch(actions.addOppPokemon(pokemon)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Town);