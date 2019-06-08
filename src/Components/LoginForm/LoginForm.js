import React from 'react'
import './LoginForm.css'

export default class LoginForm extends React.Component {
    render(){
        return(
            <div class="login-form-card">
                <form class="login-form">
                    <ul>
                        <li>
                            <label for="email"><b>Email</b></label>
                            <input type="email" name="email" required/>
                        </li>
                        <li>
                            <label for="password"><b>Password</b></label>
                            <input type="password"name="password" required/>
                        </li>
                        <button type="submit"><a href="/search">Login</a></button>
                    </ul>
                </form>
            </div>
        )
    }
}