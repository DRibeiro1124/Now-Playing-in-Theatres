import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import IndividualMovie from './IndividualMovie'

class MovieList extends Component {
    render() {
        return (
            <section className="movies-container">
                <section className="movies-container-title">
                    Now Playing:
                </section>
                <section className="movies">
                    {this.props.movies.map((movie, i) => {
                        return (
                            <Link to={`/Movie/${i}`}>
                                <IndividualMovie key={i} movie={movie} />
                            </Link>
                        )
                    })}
                </section>
            </section>
        );
    }
}

export default MovieList;
