import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    // aqui lo que estoy haciendo es utilizar un condicional que pregunta cuando el caso sea distinto de nulo
    // en esa propiedad de IMD. si cumple la condicion retorna esa linea de otra manera va a retornar diciendo No rating found
    if (this.props.IMDBRating !== null) {
     return <img src={imgMapper[this.props.IMDBRating]} alt=""/>
     // si quiero puedo agregar {this.props.IMDBRating} al alt y tambien va a funcionar 
   } else {
     return <h4>No Rating Found</h4>
   }
   // esto me lo da el ejercicio como ayuda if the IMDBRating prop is null, return an <h4> with the contents 'No Rating Found'
//otherwise, return <img src={imgMapper[prop]} alt="" /> (using the correct prop)
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title"> {this.props.title}</h3>
        <span />
        { /* your rating element should go here -- you can invoke methods within JSX, à la: this.myMethod() */
        this.generateRatingElement() // aqui basicamente lo que estoy haciendo es invocar el metodo que tengo arriba y para eso debo usar this
        }
        <span />
        <h5 className="genres">{this.props.genres.join(", ")}</h5>
      </div>
    )
  }
}
