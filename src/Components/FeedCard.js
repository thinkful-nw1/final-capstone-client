import React from 'react';

export default class FlightSearchForm extends React.Component {
  render() {
    return (
      <ul className="feed-list">
        <li className="feed-post">
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
