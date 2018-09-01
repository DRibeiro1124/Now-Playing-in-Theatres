import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.movieId}
            </div>
        );
    }
}

export default MovieDetails;
