import React, { Component } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class FeaturedMovie extends Component {
    render() {
        console.log(this.props.movies)
        console.log(this.props.randomNumber)
        if (this.props.movies && this.props.randomNumber) {
            return (
                <section className="movie">
                    <span className="featured-intro">Featured Movie of the Week!</span>
                    <section className="movie-title">
                        {this.props.movies[this.props.randomNumber].title}
                    </section>
                    <img 
                    src={`${IMAGE_BASE_URL}${this.props.movies[this.props.randomNumber].poster_path}`} 
                    alt={`${this.props.movies[this.props.randomNumber].title}`} 
                    width="150"
                    />
                    <button className="favorite-button">Add to Favorites</button>
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
