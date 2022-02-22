import React, { Component } from "react";

export default class Pokemon extends Component {
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