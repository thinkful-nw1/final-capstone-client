import React from 'react';

export default class WeatherCard extends React.Component {
  render() {
    return (
      <ul className="weather-card">
        <li className="weather-">
          <span>
            <img src="/" alt="UserAvatar" />
            <h4>Username</h4>
            <p>Planned a trip to Hawaii</p>
          </span>
        </li>
      </ul>
    );
  }
}