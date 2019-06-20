import React from 'react';
import './LoginForm.css';
import AuthApiService from '../../services/auth-api-service';

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = ' ';
        password.value = ' ';
        console.log(res);
        // TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        console.log(res);
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div className="login-form-card">
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
            <button type="submit">
              <a href="/search">Login</a>
            </button>
          </ul>
        </form>
      </div>
    );
  }
}
