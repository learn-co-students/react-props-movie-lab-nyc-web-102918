import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  constructor(props) {
    super(props)
  }
  generateMovieCards = (props) => {
    return movieData.map((data, index) => {
      return <MovieCard key={index} {...data}/>
    });
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
