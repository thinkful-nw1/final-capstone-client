import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../contexts/dataContext';

export default class LandingPage extends React.Component {
  static contextType = DataContext;
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>[Trip Planning App]</h1>
          <h2>[All your travel plans in one place]</h2>
        </header>
        <section>
          [Plan your trip with one click! Enter your destination and get
          flights, sights, and eats to add to your travel itinerary.]
        </section>
        <section className="card-signup-form">
          <header>
            {this.context.isAuthorized ? (
              ''
            ) : (
              <Link to="/register">Sign Up Now</Link>
            )}
          </header>
        </section>
      </main>
    );
  }
}
