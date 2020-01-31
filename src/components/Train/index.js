import React from 'react';
import './index.css';

class Train extends React.Component {
    render() {
        return (
            <div>
                {this.props.train} {''}
                {this.props.station} {''}
                {this.props.destination} {''}
                {this.props.start} {''}
            </div>
        )
    }
}

export default Train;