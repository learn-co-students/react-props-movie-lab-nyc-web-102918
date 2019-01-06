import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import { ENGINE_METHOD_DIGESTS } from 'constants';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   
    return movieData.map((movie, index) => 
      <MovieCard {...movie} key={movie.id}/>
    ) 
  }


  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
