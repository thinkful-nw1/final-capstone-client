import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusMessage: ''
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      statusMessage: ''
    });
    const { username, email, password, verify_password } = e.target;

    if (password.value !== verify_password.value)
      return this.setState({
        statusMessage: 'Passwords do not match'
      });

    AuthApiService.postUser({
      username: username.value,
      email: email.value,
      password: password.value
    })
      .then(user => {
        email.value = '';
        username.value = '';
        password.value = '';
        verify_password.value = '';
        this.handleSuccess();
      })
      .catch(err => this.handleErrorMessage(err.error));
  };

  handleSuccess = () => {
    this.setState({
      statusMessage: 'Registration successful'
    });
    setTimeout(() => {
      this.props.history.push('/login');
    }, 2000);
  };

  handleErrorMessage = statusMessage => {
    this.setState({ statusMessage });
  };

  renderErrorMessage = msg => {
    return (
      <div>
        <h2>{msg}</h2>
      </div>
    );
  };

  render() {
    return (
      <div className="signup-form-card">
        {this.state.statusMessage &&
          this.renderErrorMessage(this.state.statusMessage)}
        <form className="signup-form" onSubmit={this.handleFormSubmit}>
          <ul>
            <li>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                required
              />
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </li>

            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                required
              />
            </li>

            <li>
              <label htmlFor="verify_password">Verify Password</label>
              <input
                type="password"
                name="verify_password"
                id="verify_password"
                autoComplete="new-password"
                required
              />
            </li>
            <li>
              <button type="submit">Join</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
