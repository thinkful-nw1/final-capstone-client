import React from 'react';
import TokenService from '../services/token-service';

const DataContext = React.createContext({
  selectedFlight: null,
  toFlightData: [],
  toFlightErrorMsg: null,
  isAuthorized: false,
  destination: null,
  setDestination: () => {},
  setToFlight: () => {},
  setToFlightError: () => {},
  toggleIsAuthorized: () => {},
  setSelectedFlight: () => {}
});

export default DataContext;

export class DataProvider extends React.Component {
  state = {
    destination: null,
    selectedFlight: null,
    toFlightData: [],
    toFlightErrorMsg: null,
    isAuthorized: TokenService.hasAuthToken()
  };

  setDestination = destination => {
    this.setState({ destination });
  };

  setSelectedFlight = selectedFlight => {
    this.setState({ selectedFlight });
  };

  setToFlight = toFlightData => {
    this.setState({ toFlightData });
  };

  setToFlightError = toFlightErrorMsg => {
    this.setState({ toFlightErrorMsg });
  };

  toggleAuthorized = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const value = {
      destination: this.state.destination,
      selectedFlight: this.state.selectedFlight,
      toFlightData: this.state.toFlightData,
      toFlightErrorMsg: this.state.toFlightErrorMsg,
      setDestination: this.setDestination,
      setToFlight: this.setToFlight,
      setToFlightError: this.setToFlightError,
      toggleAuthorized: this.toggleAuthorized,
      setSelectedFlight: this.setSelectedFlight,
      isAuthorized: this.state.isAuthorized
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
