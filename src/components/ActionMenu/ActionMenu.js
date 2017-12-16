import React from 'react';
import './ActionMenu.css';

const actionMenu = (props) => {
    if (props.active) {
        return (
            <div className="col-12 col-md-4 actionBox">
                <div className="row">
                    <div className="col-6">
                        <button name="fight" onClick={(e) => props.action(e)}>FIGHT</button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <button name="bag" onClick={(e) => props.action(e)}>BAG</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button name="pokemon" onClick={(e) => props.action(e)}>POKeMON</button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <button name="run" onClick={(e) => props.action(e)}>RUN</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="col-12 col-md-4 actionBox">
            <div className="row">
                <div className="col-6">
                    <button disabled name="fight" onClick={(e) => props.action(e)}>FIGHT</button>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <button disabled name="bag" onClick={(e) => props.action(e)}>BAG</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <button disabled name="pokemon" onClick={(e) => props.action(e)}>POKeMON</button>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <button disabled name="run" onClick={(e) => props.action(e)}>RUN</button>
                </div>
            </div>
        </div>  
    )
}

export default actionMenu;