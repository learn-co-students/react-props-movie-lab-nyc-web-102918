import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
  const MovieCards = movieData.map((movie) => {
    return <MovieCard title = {movie.title} IMDBRating = {movie.IMDBRating} genres = {movie.genres} poster={movie.poster}/>
  })
    return MovieCards
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
