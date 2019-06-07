import React from 'react';
import LandingPage from '../Routes/LandingPage'
import LoginPage from '../Routes/LoginPage'
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <Nav />
        </header>
        <main className='app-main'>
          <Switch>
              <Route
                exact path={'/'}
                component={LandingPage}
              />
              <Route
                path={'/login'}
                component={LoginPage}
              />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
