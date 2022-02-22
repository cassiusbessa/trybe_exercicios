import React from "react";
import Arrow from "./Arrows";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import Search from "./Search";



export default class Pokedex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pokedexPosition:0,
      searchPokemon:'',
    }
    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  changePokemon(event) { 
   event.target.innerText === 'next' ?
   this.setState(({pokedexPosition}) => ({  
    pokedexPosition: pokedexPosition < pokemons.length - 1 ? pokedexPosition + 1 : 0
   }))
   : this.setState(({pokedexPosition}) => ({
    pokedexPosition: pokedexPosition === 0 ? pokemons.length -1 : pokedexPosition - 1
  }));
}
    
  filterPokemon(event) {
    this.setState({
      searchPokemon: event.target.value
    })    
  };    
  render() {
    // const {searchPokemon} = this.state
    // console.log(searchPokemon);

  return(
  <>
    <div className="Pokedex-info">
        <h1 className = "Pokedex-title">Pokedex do Cássius</h1>
        <h3 className = "Pokedex-gym">Mestre do Ginásio do React</h3>
    </div>
    <div className="Pokedex-main">           
      <Search onChange = {this.filterPokemon}/>
      {/* {(!pokemons.filter((element) => element.type.includes(this.state.searchPokemon))) ? <Erro /> :
      
      } */}
      <Pokemon              
      pokemon={pokemons.filter((element) => element.type.includes(this.state.searchPokemon) )[this.state.pokedexPosition]}/>

      <Arrow xablau = {this.changePokemon}/>      
    </div>
 </>
  )}
}