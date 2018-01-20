import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';
import PokemonService from '../../services/PokemonService';
import Pokemon from '../../entities/Pokemon';
import TownMenu from '../TownMenu/TownMenu';
import _ from 'lodash';

import Tree from '../../images/town/tree1.png';
import Player from '../../images/town/player.jpg';
import Grass from '../../images/town/grass.png';
import TallGrass from '../../images/town/tallGrass.png';
import Water from '../../images/town/water.png';
import PokeDollar from '../../images/town/pokedollar.png';

import './Town.css';

class Town extends Component {

    state = {
        message: 'PALLET TOWN',
        isBagOpen: false,
        isStoreOpen: false,
    };

    componentWillMount() {
        document.addEventListener("keydown", this.action);
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this.action);
    };

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
        // Exit store automatically if not on store tile
        if (this.state.isStoreOpen && tile !== 'ST') {
            // Reset message and menu
            this.setState({
                message: 'PALLET TOWN',
                isStoreOpen: false
            })
        }
        // Enter Store
        if (tile === 'ST') {
            this.setState({
                message: 'What would you like to buy?',
                isStoreOpen: true
            })

        }
        // Enter Gym
        if (tile === 'GL') {
            console.log('Gym Leader')
        }
        // Walking around in tall grass
        if (tile === 'TG') {
            let randomNum = Math.floor(Math.random() * 101);
            let rarity = '';
            // Common Pokemon Encountered
            if (randomNum  <= 30) {
                rarity = 'common';
            };
            // Uncommon Pokemon Encounter
            if (randomNum > 30 && randomNum <= 50) {
                rarity = 'uncommon';
            };
            // Rare Pokemon Encounter
            if (randomNum > 50 && randomNum <= 60) {
                rarity = 'rare';
            };
            if (rarity) {
                // Find pokemon from database
                PokemonService.getPokemonByRarity(rarity)
                    .then(result => {
                        // Select random pokemon from rarity list
                        let randPokemon = _.sample(result.data);
                        // Create enemy pokemon instance
                        let pokemon = new Pokemon(
                            randPokemon.id,
                            randPokemon.name,
                            randPokemon.type,
                            Math.round(this.props.playerPokemon[0].maxHealth * 1.3),
                            Math.round(this.props.playerPokemon[0].maxHealth * 1.3),
                            Math.round(this.props.playerPokemon[0].attackDamage * 1.2),
                            randPokemon.attackName,
                            Math.round(this.props.playerPokemon[0].level * 1.2),
                            randPokemon.evolves,
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
                case 'PT': // Pathway grass
                    source = Grass;
                    break;
                case 'TG': //Tall Grass
                    source = TallGrass;
                    break;
                case 'WT':
                    source = Water;
                    break;
                default:
                    break;
            }
            // Locates player on town map
            if (rowIndex === this.props.rowPos && colIndex === this.props.colPos) {
                tileType = 'Player';
                source = Player;
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

    displayPokemonList() {
        this.props.history.replace('/pokemon');

    };

    displayItemsList() {
        this.setState({
            isBagOpen: true,
            message: `Health X ${this.props.playerItems[0]['Health']} PokeBall X ${this.props.playerItems[1]['PokeBall']}`
        })
    };
    
    buyItem(e) {
        switch (e.target.name) {
            case 'Health':
                if (this.props.playerMoney < 100) {
                    this.setState({
                        message: 'Unable to afford item!'
                    })
                } else {
                    this.setState({
                        message: `You bought a ${e.target.name} Potion`
                    })
                    this.props.buyItem(e.target.name, 100);
                }
            break;
            case 'PokeBall':
                if (this.props.playerMoney < 150) {
                    this.setState({
                        message: 'Unable to afford item!'
                    })
                } else {
                    this.setState({
                        message: `You bought a ${e.target.name}`
                    })
                    this.props.buyItem(e.target.name, 150);
                }
                break;
            default: return;
        };
    };

    closeBag() {
        this.setState({
            isBagOpen: false,
            message: 'PALLET TOWN'
        })
    }


    render() {
        return (
            <div className="container townWrapper">
                <img className="PokeDollar" src={PokeDollar} alt="PokeDollar"/>
                {this.props.playerMoney}
                <div className="town">
                    {this.renderTown()}
                </div>
                <TownMenu
                    isStoreOpen={this.state.isStoreOpen}
                    closeBag={() => this.closeBag()}
                    isBagOpen={this.state.isBagOpen}
                    buyItem={(e) => this.buyItem(e)}
                    pokemonList={() => this.displayPokemonList()} 
                    itemsList={() => this.displayItemsList()}
                    message={this.state.message}/>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        map: state.town.map,
        rowPos: state.town.rowPos,
        colPos: state.town.colPos,
        playerPokemon: state.player.pokemon,
        playerItems: state.player.items,
        playerMoney: state.player.money
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePlayerPosition: (row, col) => dispatch(actions.updatePlayerPosition(row, col)),
        addOppPokemon: (pokemon) => dispatch(actions.addOppPokemon(pokemon)),
        buyItem: (item, price) => dispatch(actions.buyItem(item, price)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Town));