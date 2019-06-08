import React from 'react'

export default class RegistrationForm extends React.Component {
    render() {
        return ( 
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
        )
    }
}