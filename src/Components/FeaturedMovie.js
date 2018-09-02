import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IndividualMovie from './IndividualMovie'

class FeaturedMovie extends Component {
    render() {
        if (this.props.movies && this.props.randomNumber) {
            let movies = this.props.movies
            let randomMovieIndex = this.props.randomNumber
            let randomMovie = movies[randomMovieIndex]
            return (
                <section>
                    <section className="center">
                        Featured Movie of the Week!
                    </section>
                    <section className="movie-container">
                        <Link 
                        className="movie-link"
                        to={{
                            pathname: `/Movie/${randomMovieIndex}`,
                            state: {
                                movies: this.props.movies
                            }
                        }}>
                            <IndividualMovie movie={randomMovie} imageWidth={150}/>
                        </Link>
                    </section>
                </section>
            );
        }
        else {
            return (
                <section className="movie">
                    Waiting for the featured movie to load...
                </section>
            )
        }
    }
}

export default FeaturedMovie;
