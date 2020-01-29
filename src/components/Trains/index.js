import React from 'react';
import './index.css';

class Trains extends React.Component {
    render() {
        return (
            <div>
                {this.props.train && <p>Tågnummer: {this.props.train}</p>}
                {this.props.station && <p>Nuvarande station: {this.props.station}</p>}
                {this.props.destination && <p>Till: {this.props.destination}</p>}
                {this.props.start && <p>Från: {this.props.start}</p>}
            </div>
        )
    }
}

export default Trains;