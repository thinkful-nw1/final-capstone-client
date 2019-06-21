import React from 'react';
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends React.Component {
  render() {
    return (
      <div>
        <RegistrationForm history={this.props.history} />
      </div>
    );
  }
}
