import React from 'react';
import Button from './components/Button';
import Trains from './components/Trains';

class App extends React.Component {
  state = {
    train: undefined,
    station: undefined,
    destination: undefined,
    start: undefined,
  };

  getTrains = async e => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:8080');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      train: data.trains[0].train,
      station: data.trains[0].station.station,
      destination: data.trains[0].trip.to,
      start: data.trains[0].trip.from,
    });
  }

  render() {
    return (
      <div>
        <Button getTrains={this.getTrains} />
        <Trains
          train={this.state.train}
          station={this.state.station}
          destination={this.state.destination}
          start={this.state.start}
        />
      </div>
    )
  }
}

export default App;