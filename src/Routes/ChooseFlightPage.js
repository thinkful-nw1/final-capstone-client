import React from 'react';
import DataContext from '../contexts/dataContext';

export default class ChooseFlightPage extends React.Component {
  static contextType = DataContext;

  componentWillMount = () => {
    if (this.context.toFlightData.length < 1)
      this.props.history.push('/search');
  };
  render() {
    return <div />;
  }
}
