import React from 'react';
import './FlightCard.css';

export default class FlightCard extends React.Component {
  state = { flight_code: this.props.flight.flight_code };
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
        <button>Select</button>
      </div>
    );
  }
}
