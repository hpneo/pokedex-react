import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import Profile from './routes/Profile';
import ProfileEditor from './routes/ProfileEditor';

import store from './redux/store';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className='app-body'>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <Switch>
                <Route exact path="/profile/:user" component={Profile} />
                <Route exact path="/profile/:user/edit" component={ProfileEditor} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
