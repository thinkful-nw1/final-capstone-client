import React from 'react'

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
                <form class='signup-form'>
                    <div class="form-field">
                        <label for="username" >Username</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div class="form-field">
                        <label for="email">Email</label>
                        <input type="email" name='email'/>
                    </div>
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                <button type='submit'>Join</button>
                </form>
            </section>
            </main>
        )
    }
}