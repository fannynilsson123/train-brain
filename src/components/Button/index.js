import React from 'react';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.getTrains}>Trains</button>
        )
    }
}

export default Button;