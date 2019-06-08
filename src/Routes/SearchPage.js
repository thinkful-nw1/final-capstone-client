import React from 'react'
import FlightSearchForm from '../Components/FlightSearchForm/FlightSearchForm'
import FeedCard from '../Components/FeedCard'

export default class SearchPage extends React.Component{
    render() {
        return (
            <main role="main">
                <section class="form-section">
                    <FlightSearchForm />
                </section>
                <section class="feed-section">
                    <FeedCard />
                </section>
            </main>
        )
    }
}