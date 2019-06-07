import React from 'react'

export default class LoginPage extends React.Component {
    render() {
        return (
            <main role="main">
                <header>
                <h1> Sign In To [Travel App] </h1>
                </header>
            <form>
                <div className="form-section">
                <label for="email"><b>Email</b></label>
                <input type="email" name="email" required/>
                <label for="password"><b>Password</b></label>
                <input type="password"name="password" required/>
            
                <button type="submit">Login</button>
                </div>
            </form>
            </main> 
        )
    }
}