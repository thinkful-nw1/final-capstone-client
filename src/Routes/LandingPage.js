import React from 'react'
import RegistrationForm from '../Components/RegistrationForm'

export default class LandingPage extends React.Component {
    render() {
        return (
            <main role="main">
                <header role="banner">
                    <h1>[Trip Planning App]</h1>
                    <h2>[All your travel plans in one place]</h2>
                </header>
            <section>
                [Plan your trip with one click! Enter your destination and get flights, sights, and eats to add to your travel itinerary.] 
            </section>
            <section class='card-signup-form'>
                <header>
                    <h3>Sign Up Now</h3>
                </header>
                <RegistrationForm />
            </section>
            </main>
        )
    }
}