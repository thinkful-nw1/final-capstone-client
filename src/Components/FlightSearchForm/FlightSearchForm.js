import React from 'react';
import airports from '../../services/airports';
import './FlightSearchForm.css';

export default class FlightSearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      toInputValue: '',
      fromInputValue: '',
      showToResults: false,
      showFromResults: false,
      airportSearch: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.from_date.value);
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
        <form className="flight-search-form" onSubmit={this.handleFormSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="flight-to"
              placeholder="From"
              onChange={e => this.handleFromInput(e, 'from')}
              ref={input => (this.from = input)}
              required
            />
            <ul className={showFromResults ? 'search-box' : 'hide-box'}>
              {airportSearch.map(this.renderList)}
            </ul>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="flight-from"
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
