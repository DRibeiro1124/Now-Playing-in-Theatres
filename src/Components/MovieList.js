import React, { Component } from 'react';
import MovieDetails from './MovieDetails'

class MovieList extends Component {
    render() {
        return (
            <section className="movies">
                {this.props.movies.map((movie, i) => {
                    return (
                        <MovieDetails key={i} movie={movie}/>
                    )
                })}
            </section>
        );
    }
}

export default MovieList;
