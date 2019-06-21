import React from 'react';
import TokenService from '../services/token-service';

const DataContext = React.createContext({
  toFlightData: [],
  toFlightErrorMsg: null,
  isAuthorized: false,
  setToFlight: () => {},
  setToFlightError: () => {},
  toggleIsAuthorized: () => {}
});

export default DataContext;

export class DataProvider extends React.Component {
  state = {
    toFlightData: [],
    toFlightErrorMsg: null,
    isAuthorized: TokenService.hasAuthToken
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
      toFlightData: this.state.toFlightData,
      toFlightErrorMsg: this.state.toFlightErrorMsg,
      setToFlight: this.setToFlight,
      setToFlightError: this.setToFlightError,
      toggleAuthorized: this.toggleAuthorized,
      isAuthorized: this.state.isAuthorized
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
