import React from 'react';
import airports from '../../services/airports';
import FlightApiService from '../../services/flight-api-service';
import './FlightSearchForm.css';
import DataContext from '../../contexts/dataContext';

export default class FlightSearchForm extends React.Component {
  static contextType = DataContext;

  constructor() {
    super();
    this.state = {
      toInputValue: '',
      fromInputValue: '',
      showToResults: false,
      showFromResults: false,
      airportSearch: [],
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.context.setToFlightError(null);
    const {
      to_destination,
      from_destination,
      to_date,
      from_date,
      passengers
    } = e.target;

    FlightApiService.searchFlight({
      to_destination: to_destination.value,
      from_destination: from_destination.value,
      to_date: to_date.value,
      from_date: from_date.value,
      passengers: passengers.value
    })
      .then(data => {
        this.context.setToFlight(data);
        this.context.setDestination(to_destination);
        this.props.history.push('/choose-to');
      })
      .catch(error => {
        this.setState({ error });
        this.context.setToFlightError(error.error);
      });
  };

  handleToInput = (e, toOrFrom) => {
    const inputValue = e.target.value;
    this.setState({
      toInputValue: inputValue,
      showToResults: true,
      showFromResults: false
    });
    this.handleAirportLookup(inputValue, toOrFrom);
  };

  handleFromInput = e => {
    const inputValue = e.target.value;
    this.setState({
      fromInputValue: inputValue,
      showFromResults: true,
      showToResults: false
    });
    this.handleAirportLookup(inputValue);
  };

  handleAirportLookup = (value, toOrFrom) => {
    if (value.length >= 2) {
      const airportSearch = airports.filter(airport =>
        this.findPossibleAirports(airport, value)
      );
      this.setState({ airportSearch });
    } else {
      this.setState({ airportSearch: [] });
    }
  };

  findPossibleAirports = (airport, value) => {
    if (
      airport.code.toLowerCase().includes(value) ||
      airport.city.toLowerCase().includes(value) ||
      airport.state.toLowerCase().includes(value) ||
      airport.name.toLowerCase().includes(value)
    )
      return airport;
  };

  handleAirportClick = i => {
    const airport = this.state.airportSearch[i];
    if (this.state.showFromResults) {
      this.setState({ fromInputValue: airport.code, showFromResults: false });
      this.from.value = airport.code;
    } else {
      this.setState({ toInputValue: airport.code, showToResults: false });
      this.to.value = airport.code;
    }
  };

  handleKeyPress = (e, i) => {
    if (e.key === 'Enter') {
      this.handleAirportClick(i);
    }
  };

  renderList = (airport, i) => {
    return (
      <li
        key={i}
        className="airport"
        role="button"
        tabIndex={0}
        onClick={() => this.handleAirportClick(i)}
        onKeyPress={e => this.handleKeyPress(e, i)}
      >
        <span>
          {airport.name} - {airport.code}
        </span>
        <br />
        <span>
          {airport.city}, {airport.state}
        </span>
      </li>
    );
  };

  render() {
    const { showToResults, showFromResults, airportSearch } = this.state;
    return (
      <div className="flight-form-card">
        <h2>{this.context.toFlightErrorMsg}</h2>
        <form className="flight-search-form" onSubmit={this.handleFormSubmit}>
          <div className="input-container" htmlFor="from_destination">
            <input
              type="text"
              name="from_destination"
              placeholder="From"
              onChange={e => this.handleFromInput(e, 'from')}
              ref={input => (this.from = input)}
              required
            />
            <ul className={showFromResults ? 'search-box' : 'hide-box'}>
              {airportSearch.map(this.renderList)}
            </ul>
          </div>
          <div className="input-container" htmlFor="to_destination">
            <input
              type="text"
              name="to_destination"
              placeholder="To"
              onChange={e => this.handleToInput(e)}
              ref={input => (this.to = input)}
              required
            />
            <ul className={showToResults ? 'search-box' : 'hide-box'}>
              {airportSearch.map(this.renderList)}
            </ul>
          </div>

          <input type="date" name="from_date" required />
          <input type="date" name="to_date" required />
          <input
            type="number"
            name="passengers"
            min="1"
            placeholder="Passengers"
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
