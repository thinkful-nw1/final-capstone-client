import React from 'react';
import FlightSearchForm from '../Components/FlightSearchForm/FlightSearchForm';
import FeedCard from '../Components/FeedCard';

export default class SearchPage extends React.Component {
  render() {
    return (
      <main role="main">
        <section className="form-section">
          <FlightSearchForm history={this.props.history} />
        </section>
        <section className="feed-section">
          <FeedCard />
        </section>
      </main>
    );
  }
}
