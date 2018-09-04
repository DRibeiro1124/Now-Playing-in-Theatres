import React, { Component } from 'react';
import CastMemberList from './CastMemberList'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=39df1c4c7a287510f53854893ba3d788'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const image_width = 350

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            castData: {}
        }
    }
    

    componentDidMount () {
        const { movieId } = this.props.match.params
        const { movies } = this.props.location.state
        const _movie = movies[movieId]
        const fetchEndpoint = '/credits'
        const fetchURL = BASE_URL+ _movie.id + fetchEndpoint + API_KEY

        fetch(fetchURL)
        .then(resp => resp.json())
        .then(castData => {
            console.log(castData)
            this.setState({
                castData: castData
            })
        })
    }

    render() {
        let { movieId } = this.props.match.params
        let { movies } = this.props.location.state
        let _movie = movies[movieId]

        return (
            <section className="movie-and-cast-container">
                <section className="movie-details">
                    <section className="movie-title"><h2>{_movie.title}</h2></section>
                    <img 
                    src={IMAGE_BASE_URL + _movie.poster_path} 
                    alt={_movie.title} 
                    width={image_width}
                    />
                </section>
                <section className="cast-details">
                    <section className="cast-details-header">
                        <h2>List of Cast Members:</h2>
                    </section>
                    <CastMemberList castData={this.state.castData}/> 
                </section>
            </section>
        );
    }
}

export default MovieDetails;
