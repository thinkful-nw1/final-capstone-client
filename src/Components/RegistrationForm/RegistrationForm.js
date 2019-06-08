import React from 'react'
import './RegistrationForm.css'

export default class RegistrationForm extends React.Component {
    render() {
        return ( 
            <div class="signup-form-card">
            <form class='signup-form'>
                <ul>
                    <li> 
                        <label for="username">Username</label>
                        <input type="text" name='username' id='username' 
                        required />
                    </li> 
                
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name='email'
                        required />
                    </li>
                
                    <li>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password'
                        required />
                    </li>
                    <li>
                        <button type='submit'>Join</button>
                    </li>
                </ul> 
            </form>
        </div>
        )
    }
}