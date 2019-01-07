import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const prop = this.props.poster
    return (
      <div className="card-front" style={{backgroundImage: `url(${prop})`}}>
      </div>
    )
  }
}
