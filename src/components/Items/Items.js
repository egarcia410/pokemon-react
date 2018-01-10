import React, { Component } from 'react';
import { connect } from 'react-redux';

class Items extends Component {

    
    render() {
        const items = this.props.playerItems.map((item, index) => {
            for (let key in item) {
                return (
                    <div className="row" key={index}>
                        {key} X {item[key]}
                    </div>
                )
            }
        })
        return (
            <div className="actionMenuInner">
                {items}
            </div>
        )

    };
};

const mapStateToProps = state => {
    return {
        playerItems: state.player.items
    }
}

export default connect(mapStateToProps)(Items);