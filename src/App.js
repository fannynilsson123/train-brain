import React from 'react';
import Button from './components/Button';
import Trains from './components/Trains';

class App extends React.Component {
  state = {
    train: undefined,
    trainTwo: undefined,
    trainThree: undefined,
    trainFour: undefined,
    trainFive: undefined,
    trainSix: undefined,
    trainSeven: undefined,
    trainEight: undefined,
    trainNine: undefined,
    trainTen: undefined,

    station: undefined,
    stationTwo: undefined,
    stationThree: undefined,
    stationFour: undefined,
    stationFive: undefined,
    stationSix: undefined,
    stationSeven: undefined,
    stationEight: undefined,
    stationNine: undefined,
    stationTen: undefined,

    destination: undefined,
    destinationTwo: undefined,
    destinationThree: undefined,
    destinationFour: undefined,
    destinationFive: undefined,
    destinationSix: undefined,
    destinationSeven: undefined,
    destinationEight: undefined,
    destinationNine: undefined,
    destinationTen: undefined,

    start: undefined,
    startTwo: undefined,
    startThree: undefined,
    startFour: undefined,
    startFive: undefined,
    startSix: undefined,
    startSeven: undefined,
    startEight: undefined,
    startNine: undefined,
    startTen: undefined,

  };

  getTrains = async e => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:8080');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      train: data.trains[1].train,
      trainTwo: data.trains[45].train,
      trainThree: data.trains[17].train,
      trainFour: data.trains[22].train,
      trainFive: data.trains[14].train,
      trainSix: data.trains[23].train,
      trainSeven: data.trains[92].train,
      trainEight: data.trains[88].train,
      trainNine: data.trains[77].train,
      trainTen: data.trains[413].train,

      station: data.trains[1].station.station,
      stationTwo: data.trains[45].station.station,
      stationThree: data.trains[17].station.station,
      stationFour: data.trains[22].station.station,
      stationFive: data.trains[14].station.station,
      stationSix: data.trains[23].station.station,
      stationSeven: data.trains[92].station.station,
      stationEight: data.trains[88].station.station,
      stationNine: data.trains[77].station.station,
      stationTen: data.trains[413].station.station,

      destination: data.trains[1].trip.to,
      destinationTwo: data.trains[45].trip.to,
      destinationThree: data.trains[17].trip.to,
      destinationFour: data.trains[22].trip.to,
      destinationFive: data.trains[14].trip.to,
      destinationSix: data.trains[23].trip.to,
      destinationSeven: data.trains[92].trip.to,
      destinationEight: data.trains[88].trip.to,
      destinationNine: data.trains[77].trip.to,
      destinationTen: data.trains[413].trip.to,

      start: data.trains[1].trip.from,
      startTwo: data.trains[45].trip.from,
      startThree: data.trains[17].trip.from,
      startFour: data.trains[22].trip.from,
      startFive: data.trains[14].trip.from,
      startSix: data.trains[23].trip.from,
      startSeven: data.trains[92].trip.from,
      startEight: data.trains[88].trip.from,
      startNine: data.trains[77].trip.from,
      startTen: data.trains[413].trip.from,
    });
    console.log(this.state)

  }

  render() {
    return (
      <div>
        <Button getTrains={this.getTrains} />
        <Trains
          train={this.state.train}
          trainTwo={this.state.trainTwo}
          trainThree={this.state.trainThree}
          trainFour={this.state.trainFour}
          trainFive={this.state.trainFive}
          trainSix={this.state.trainSix}
          trainSeven={this.state.trainSeven}
          trainEight={this.state.trainEight}
          trainNine={this.state.trainNine}
          trainTen={this.state.trainTen}

          station={this.state.station}
          stationTwo={this.state.stationTwo}
          stationThree={this.state.stationThree}
          stationFour={this.state.stationFour}
          stationFive={this.state.stationFive}
          stationSix={this.state.stationSix}
          stationSeven={this.state.stationSeven}
          stationEight={this.state.stationEight}
          stationNine={this.state.stationNine}
          stationTen={this.state.stationTen}

          destination={this.state.destination}
          destinationTwo={this.state.destinationTwo}
          destinationThree={this.state.destinationThree}
          destinationFour={this.state.destinationFour}
          destinationFive={this.state.destinationFive}
          destinationSix={this.state.destinationSix}
          destinationSeven={this.state.destinationSeven}
          destinationEight={this.state.destinationEight}
          destinationNine={this.state.destinationNine}
          destinationTen={this.state.destinationTen}

          start={this.state.start}
          startTwo={this.state.startTwo}
          startThree={this.state.startThree}
          startFour={this.state.startFour}
          startFive={this.state.startFive}
          startSix={this.state.startSix}
          startSeven={this.state.startSeven}
          startEight={this.state.startEight}
          startNine={this.state.startNine}
          startTen={this.state.startTen}
        />
      </div>
    )
  }
}

export default App;