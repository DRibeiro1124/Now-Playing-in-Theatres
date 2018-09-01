import React, { Component } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class IndividualMovie extends Component {
    render() {
        const image_width = 250
        return (
            <section className="movie">
                <section className="movie-title">{this.props.movie.title}</section>
                <img src={`${IMAGE_BASE_URL}${this.props.movie.poster_path}`} alt={`${this.props.movie.title}`} width={image_width}/>
            </section>
        );
    }
}

export default IndividualMovie;
