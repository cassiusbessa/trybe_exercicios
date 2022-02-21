import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";



export default class Pokedex extends React.Component {
  render() {
  return(
  <>
    <div className="Pokedex-info">
        <h1 className = "Pokedex-title">Pokedex do Cássius</h1>
        <h3 className = "Pokedex-gym">Mestre do Ginásio do React</h3>
    </div>
    <div className="Pokedex-main">
      {
      pokemons.map((element) =>
       <Pokemon key={element.id} pokemon={element}/>
      )    
      }
      {/* <Pokemon pokemon ={pokemons.map((element) => )}/>   */}
    </div>
</>
  )


}
}