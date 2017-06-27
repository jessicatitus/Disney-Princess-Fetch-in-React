import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.addNewMovie = this.addNewMovie.bind(this);
  }

  // componentWillMount() {
  //   debugger;
  // }

  componentDidMount() {
    fetch('http://localhost:4567/api/v1/movies')
    .then(response => response.json())
    .then(body => {
      let allMovies = body.movies
      let selectedMovies = allMovies.filter(movie => {
        return movie.release_year < 1960
      })
      this.setState({ movies: body.movies })
    })
  }

  addNewMovie(formPayload) {
    fetch('/api/v1/movies', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ movies: [...this.state.movies, responseData] })
    })
  }

  render() {
    let addNewMovie = (formPayload) => this.addNewMovie(formPayload)

    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <hr />
        <FormContainer
          addNewMovie={addNewMovie}
        />
      </div>
    )
  }

}

export default MoviesContainer;
