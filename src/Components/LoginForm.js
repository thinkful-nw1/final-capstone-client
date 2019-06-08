import React from 'react'

export default class LoginForm extends React.Component {
    render(){
        return(
            <form>
                <div className="form-section">
                <label for="email"><b>Email</b></label>
                <input type="email" name="email" required/>
                <label for="password"><b>Password</b></label>
                <input type="password"name="password" required/>
            
                <button type="submit"><a href="/search">Login</a></button>
                </div>
            </form>
        )
    }
}