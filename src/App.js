import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar'

const API_KEY = '39df1c4c7a287510f53854893ba3d788'

class App extends Component {
  render() {
    return (
      <Router>
      <NavBar />
      <section className="App-component">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </section>
      </Router>
    );
  }
}

export default App;
