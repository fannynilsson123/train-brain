import React from 'react';
import './index.css';

class Trains extends React.Component {
    render() {
        return (
            <div>
                <div className="list">

                    <br></br>

                    {this.props.train} {' '}
                    {this.props.station} {' '}
                    {this.props.destination} {' '}
                    {this.props.start} {' '}

                    <br></br>

                    {this.props.trainTwo} {' '}
                    {this.props.stationTwo} {' '}
                    {this.props.destinationTwo} {' '}
                    {this.props.startTwo} {' '}

                    <br></br>

                    {this.props.trainThree} {' '}
                    {this.props.stationThree} {' '}
                    {this.props.destinationThree} {' '}
                    {this.props.startThree} {' '}

                    <br></br>

                    {this.props.trainFour} {' '}
                    {this.props.stationFour} {' '}
                    {this.props.destinationFour} {' '}
                    {this.props.startFour} {' '}

                    <br></br>

                    {this.props.trainFive} {' '}
                    {this.props.stationFive} {' '}
                    {this.props.destinationFive} {' '}
                    {this.props.startFive} {' '}

                    <br></br>

                    {this.props.trainSix} {' '}
                    {this.props.stationSix} {' '}
                    {this.props.destinationSix} {' '}
                    {this.props.startSix} {' '}

                    <br></br>

                    {this.props.trainSeven} {' '}
                    {this.props.stationSeven} {' '}
                    {this.props.destinationSeven} {' '}
                    {this.props.startSeven} {' '}

                    <br></br>

                    {this.props.trainEight} {' '}
                    {this.props.stationEight} {' '}
                    {this.props.destinationEight} {' '}
                    {this.props.startEight} {' '}

                    <br></br>

                    {this.props.trainNine} {' '}
                    {this.props.stationNine} {' '}
                    {this.props.destinationNine} {' '}
                    {this.props.startNine} {' '}

                    <br></br>

                    {this.props.trainTen} {' '}
                    {this.props.stationTen} {' '}
                    {this.props.destinationTen} {' '}
                    {this.props.startTen} {' '}
                </div>
            </div>

        )
    }
}

export default Trains;