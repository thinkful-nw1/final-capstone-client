import React from 'react';
import LandingPage from '../Routes/LandingPage';
import LoginPage from '../Routes/LoginPage';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from '../Routes/SearchPage';
import { DataProvider } from '../contexts/dataContext';
import ChooseFlightPage from '../Routes/ChooseFlightPage';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import RegistrationPage from '../Routes/RegistrationPage';
import TripPage from '../Routes/TripPage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="app-main">
          <DataProvider>
            <BrowserRouter>
              <header className="app-header">
                <Nav />
              </header>
              <Switch>
                <Route exact path={'/'} component={LandingPage} />
                <PublicOnlyRoute
                  path="/register"
                  component={RegistrationPage}
                />
                <PublicOnlyRoute path="/login" component={LoginPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/choose-to" component={ChooseFlightPage} />
                <Route path="/trip" component={TripPage} />
              </Switch>
            </BrowserRouter>
          </DataProvider>
        </main>
      </div>
    );
  }
}

export default App;
