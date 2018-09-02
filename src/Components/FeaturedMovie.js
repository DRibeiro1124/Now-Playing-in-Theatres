import React, { Component } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class FeaturedMovie extends Component {
    render() {
        if (this.props.movies && this.props.randomNumber) {
            let movies = this.props.movies
            let randomMovieIndex = this.props.randomNumber
            let randomMovie = movies[randomMovieIndex]
            return (
                <section className="movie">
                    <section>Featured Movie of the Week!</section>
                    <section className="movie-title">
                        {randomMovie.title}
                    </section>
                    <img 
                    src={IMAGE_BASE_URL + randomMovie.poster_path} 
                    alt={randomMovie.title} 
                    width="150"
                    />
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
