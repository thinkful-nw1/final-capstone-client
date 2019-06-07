import React from 'react'

export default class Nav extends React.Component {
    render(){
        return (
            <nav role="navigation">
                <span className="nav-logo">
                    <a href="/"><img src="/" alt="TravelAppLogo"/> </a>
                </span>
                <span><a href="/">Login</a></span>
            </nav>
        );
    }
}