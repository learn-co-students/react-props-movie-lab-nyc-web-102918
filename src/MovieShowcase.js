import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // aqui voy utilizar un .map sobre la movie generada  porque debo iterate data array and render MovieCards for each element
    // el primer error del test es renders at least one <MovieCard /> component
    // debo incluir todas las propiedades 
    const movieCards = movieData.map(movie => {
      return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>

    })
    return movieCards
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
