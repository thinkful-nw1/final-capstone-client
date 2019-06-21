import React from 'react';
import './LoginForm.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import DataContext from '../../contexts/dataContext';

export default class LoginForm extends React.Component {
  static contextType = DataContext;
  state = { error: null };

  handleLoginSuccess = () => {
    console.log('success');
    console.log(TokenService.hasAuthToken());
    this.context.toggleAuthorized(TokenService.hasAuthToken());
    console.log(this.context.isAuthorized);
    this.props.history.push('/');
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch(err => {
        this.setState({ error: err.error });
      });
  };
  render() {
    return (
      <div className="login-form-card">
        <h2>{this.state.error}</h2>
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          <ul>
            <li>
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                type="text"
                name="username"
                autoComplete="username"
                required
              />
            </li>
            <li>
              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current_password"
                required
              />
            </li>
            <button type="submit">Login</button>
          </ul>
        </form>
      </div>
    );
  }
}
