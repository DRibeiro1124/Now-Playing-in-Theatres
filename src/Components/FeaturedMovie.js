import React, { Component } from 'react';
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
                    <IndividualMovie movie={randomMovie} imageWidth={150} />
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
