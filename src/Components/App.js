import React from 'react';
import LandingPage from '../Routes/LandingPage'
import LoginPage from '../Routes/LoginPage'
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchPage from '../Routes/SearchPage';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <Nav />
        </header>
        <main className='app-main'>
          <BrowserRouter>
            <Switch>
                <Route
                  exact path={'/'}
                  component={LandingPage}
                />
                <Route
                  path={'/login'}
                  component={LoginPage}
                />
                <Route
                  path={'/search'}
                  component={SearchPage}
                />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
