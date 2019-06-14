import React from 'react';
import './LoginForm.css';
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
  
    AuthApiService.postLogin({
      username: username.value, 
      password: password.value, 
    })
      .then(res => {
        username.value = ' '
        password.value = ' '
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({error: res.error})
      })
  }
  render() {
    return (
      <div className="login-form-card">
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          <ul>
            <li>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
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

