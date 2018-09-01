import React, { Component } from 'react';
import IndividualMovie from './IndividualMovie'

class MovieList extends Component {
    render() {
        return (
            <section>
                <section></section>
                <section className="movies">
                    {this.props.movies.map((movie, i) => {
                        return (
                            <IndividualMovie key={i} movie={movie} />
                        )
                    })}
                </section>
            </section>
        );
    }
}

export default MovieList;
