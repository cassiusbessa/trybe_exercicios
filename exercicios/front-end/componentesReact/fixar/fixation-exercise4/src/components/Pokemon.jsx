import React, { Component } from "react";

export default class Pokemon extends Component {
    
  // constructor(props) {
  //   super(props);
  //   this.changePokemon = this.changePokemon.bind(this);
  //   this.state = {
  //       pokedexPosition:0
  //   }
  // }  
  
  render() {
      const { name, type, averageWeight, image } = this.props.pokemon
    
    return (
    <div className="Pokemon-container">

        <ul className="Pokemon-card">
          <li>{name}</li>
          <li>{type}</li>
          <li> {`${averageWeight.value} ${averageWeight.measurementUnit}`}</li>
      </ul>
      <img className="Pokemon-img" src={image} alt={`Icon do ${name}`} />
    </div>
    )
  }

}