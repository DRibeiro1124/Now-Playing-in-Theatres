import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar'

const API_KEY = '39df1c4c7a287510f53854893ba3d788'
const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(resp => resp.json())
      .then(movieData => {
        this.setState({
          movies: movieData.results
        })
      })
  }

  render() {
    return (
      <Router>
        <section>
          <NavBar />
          <section className="App-component">
            <Switch>
              <Route path="/" exact component={() => <HomePage movies={this.state.movies}/>} />
            </Switch>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
