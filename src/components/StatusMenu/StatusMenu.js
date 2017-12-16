import React from 'react';
import './StatusMenu.css';

const statusMenu = (props) => (
        <div className="statusBar col-12 col-md-4">
            <div className="topStatusBar">
                <div className="nameType">
                    <h1 className="name">{props.user.name} <span className="type">{props.user.type[0]}</span> </h1>
                </div>
                <h2 className="level">Lv {props.user.level}</h2>
            </div>
            <div className="bottomStatusBar">
                <div style={{ width: props.health(props.user, props.opponent) + '%' }} className="healthBar">HP {props.user.currentHealth}</div>
            </div>
        </div>
)

export default statusMenu;