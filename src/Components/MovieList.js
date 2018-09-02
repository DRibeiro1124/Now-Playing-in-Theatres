import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IndividualMovie from './IndividualMovie'

class MovieList extends Component {
    render() {
        return (
            <section className="movies-container">
                <section className="movies-container-title">Now Playing:</section>
                <section className="movies">
                    {this.props.movies.map((movie, i) => {
                        return (
                            <Link 
                            className="movie-link"
                            to={{
                                pathname: `/Movie/${i}`,
                                state: {
                                    movies: this.props.movies
                                }
                            }} 
                            key={i}>
                                <IndividualMovie key={i} movie={movie} imageWidth={250}/>
                            </Link>
                        )
                    })}
                </section>
            </section>
        );
    }
}

export default MovieList;
