import React, { Component } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class IndividualMovie extends Component {
    render() {
        const image_width = 250
        let movie = this.props.movie
        return (
            <section className="movie">
                <section className="movie-title">{movie.title}</section>
                <img 
                src={IMAGE_BASE_URL + movie.poster_path} 
                alt={movie.title} 
                width={image_width}
                />
            </section>
        );
    }
}

export default IndividualMovie;
