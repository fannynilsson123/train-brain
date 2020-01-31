import React from 'react';
import Button from './components/Button';
import Train from './components/Train';

class App extends React.Component {
  state = {};

  getTrains = async e => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:8081');
    const data = await api_call.json();
    console.log(data);

    this.setState({
      trains: data.trains.slice(0, 15)
    }
    );
    console.log(this.state);

  }

  render() {
    return (
      <div>
        <Button getTrains={this.getTrains} />
        {this.state.trains ?
          this.state.trains.map((train, index) => {
            return <Train
              key={index}
              station={train.station.station}
              train={train.train}
              start={train.trip.from}
              destination={train.trip.to} />
          }) : ''
        }
      </div>
    )
  }
}

export default App;