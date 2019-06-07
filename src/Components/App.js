import React from 'react';
import LandingPage from '../Routes/LandingPage'
import Nav from './Nav'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <Nav />
        </header>
        <main className='app-main'>
          <LandingPage />
        </main>
      </div>
    );
  }
}

export default App;
