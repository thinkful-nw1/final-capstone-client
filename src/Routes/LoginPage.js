import React from 'react';
import LoginForm from '../Components/LoginForm/LoginForm';

export default class LoginPage extends React.Component {
  render() {
    return (
      <main role="main">
        <header>
          <h1> Sign In To [Travel App] </h1>
        </header>
        <LoginForm history={this.props.history} />
      </main>
    );
  }
}
