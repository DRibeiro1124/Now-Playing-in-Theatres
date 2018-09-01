import React, { Component } from 'react';
import FeaturedMovie from './FeaturedMovie'
import MovieList from './MovieList'

class HomePage extends Component {

    render() {
        return (
            <div>
                <FeaturedMovie movies={this.props.movies} randomNumber={this.props.randomNumber} />
                <MovieList movies={this.props.movies} />
            </div>
        );
    }
}

export default HomePage;
