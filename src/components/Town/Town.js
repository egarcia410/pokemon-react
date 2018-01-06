import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Tree from '../../images/town/tree1.png';
import TallGrass from '../../images/town/tallGrass.png';
import Water from '../../images/town/water.png';

import './Town.css';

class Town extends Component {

    
    componentWillMount() {
        document.addEventListener("keydown", this.action);
    }

    componentWillUnount() {
        document.removeEventListener("keydown", this.action);
    }

    action = (e) => {
        console.log(e.keyCode);
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
        this.props.updatePlayerPosition(this.props.rowPos, this.props.colPos - 1); 
    };

    moveRight = () => {
        this.props.updatePlayerPosition(this.props.rowPos, this.props.colPos + 1);
    };

    moveUp = () => {
        this.props.updatePlayerPosition(this.props.rowPos - 1, this.props.colPos);
    }

    moveDown = () => {
        this.props.updatePlayerPosition(this.props.rowPos + 1, this.props.colPos);
    };

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
            <div className="container">
                <h1>Pallet Town</h1>
                {this.renderTown()}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Town);