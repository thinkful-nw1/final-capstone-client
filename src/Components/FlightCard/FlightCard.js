import React from 'react';
import './FlightCard.css';
import DataContext from '../../contexts/dataContext';

export default class FlightCard extends React.Component {
  static contextType = DataContext;

  state = { flight_code: this.props.flight.flight_code };

  handleSelectFlightClick = () => {
    this.context.setSelectedFlight(this.props.flight);
    this.props.history.push('/trip');
  };

  render() {
    return (
      <div className="flight">
        <span>
          Airline:
          {
            this.props.flight.booking_urls[
              Object.keys(this.props.flight.booking_urls)[0]
            ].name
          }
        </span>
        <span>Price: {this.props.flight.price}</span>
        <button onClick={this.handleSelectFlightClick}>Select</button>
      </div>
    );
  }
}
