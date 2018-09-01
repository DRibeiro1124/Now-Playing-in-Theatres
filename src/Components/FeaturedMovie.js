import React, { Component } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class FeaturedMovie extends Component {
    render() {
        return (
            <div>
                <section className="movie">
                    <section className="movie-title">{this.props.movies[this.props.randomNumber].title}</section>
                    <img src={`${IMAGE_BASE_URL}${this.props.movies[this.props.randomNumber].poster_path}`} alt={`${this.props.movies[this.props.randomNumber].title}`} />
                </section>
            </div>
        );
    }
}

export default FeaturedMovie;
