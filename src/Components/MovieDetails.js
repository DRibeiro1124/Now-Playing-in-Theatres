import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        console.log(this.props)
        let _movieId = this.props.match.params.movieId
        let _movies = this.props.location.state.movies
        return (
            <div>
                {_movies[_movieId].title}
            </div>
        );
    }
}

export default MovieDetails;
