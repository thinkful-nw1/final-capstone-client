import React from 'react';

const DataContext = React.createContext({
  toFlightData: [],
  toFlightErrorMsg: null,
  setToFlight: () => {},
  setToFlightError: () => {}
});

export default DataContext;

export class DataProvider extends React.Component {
  state = {
    toFlightData: [],
    toFlightErrorMsg: null
  };

  setToFlight = toFlightData => {
    this.setState({ toFlightData });
  };

  setToFlightError = toFlightErrorMsg => {
    this.setState({ toFlightErrorMsg });
  };

  render() {
    const value = {
      toFlightData: this.state.toFlightData,
      toFlightErrorMsg: this.state.toFlightErrorMsg,
      setToFlight: this.setToFlight,
      setToFlightError: this.setToFlightError
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
