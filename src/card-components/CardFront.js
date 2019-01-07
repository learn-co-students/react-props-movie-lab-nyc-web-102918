import React, { Component } from 'react';

export default class CardFront extends Component {
// incluyo pro en el url me lo dice el enunciado, debo remover las comillas
  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
