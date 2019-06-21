import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import DataContext from '../contexts/dataContext';

export default class Nav extends React.Component {
  static contextType = DataContext;
  handleLogout = () => {
    this.context.toggleAuthorized();
    TokenService.clearAuthToken();
  };

  renderLogoutLink = () => {
    return (
      <span>
        <Link onClick={this.handleLogout} to="/">
          Logout
        </Link>
      </span>
    );
  };

  renderLoginLink = () => {
    return (
      <span>
        <Link to="/login">Login</Link>
      </span>
    );
  };
  render() {
    return (
      <nav role="navigation">
        <span className="nav-logo">
          <a href="/">
            <img src="/" alt="TravelAppLogo" />{' '}
          </a>
        </span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
