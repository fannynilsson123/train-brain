import React from 'react';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.getTrains}>Tåginfo</button>
        )
    }
}

export default Button;