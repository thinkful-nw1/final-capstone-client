import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form-card">
        <form className="login-form">
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
