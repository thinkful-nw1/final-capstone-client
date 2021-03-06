import React from 'react';
import DataContext from '../contexts/dataContext';
import FlightCard from '../Components/FlightCard/FlightCard';

export default class ChooseFlightPage extends React.Component {
  static contextType = DataContext;

  componentWillMount = () => {
    if (this.context.toFlightData.length < 1)
      this.props.history.push('/search');
  };

  renderFlights = () => {
    return this.context.toFlightData.map(flight => (
      <FlightCard
        key={flight.flight_code}
        flight={flight}
        history={this.props.history}
      />
    ));
  };

  render() {
    return <div>{this.renderFlights()}</div>;
  }
}
