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
      searchPokemon:pokemons,
    }
    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  filterPokemon(event) {
    const filtred = pokemons.filter((element) => Object.values(element)
      .join(' ').toLowerCase().includes(event.target.value.toLowerCase()));    
    // console.log(filtred);
    // const erro = ''
   filtred.length !== 0 ?  this.setState({searchPokemon: filtred, pokedexPosition:0 })
   : this.setState({searchPokemon: [false], pokedexPosition:0 })
   
    //   () => {
    //   console.log(1, this.state.searchPokemon);
    //   pokemons.filter((element) => element.type.includes(this.state.searchPokemon) )      
    //   console.log(2, this.state.searchPokemon);
    // }
    // )
  }    
  changePokemon(event) { 
   event.target.innerText === 'next' ?
   this.setState(({pokedexPosition}) => ({  
    pokedexPosition: pokedexPosition < this.state.searchPokemon.length - 1 ? pokedexPosition + 1 : 0
   }))
   : this.setState(({pokedexPosition}) => ({
    pokedexPosition: pokedexPosition === 0 ? this.state.searchPokemon.length -1 : pokedexPosition - 1
  }));
}
    
  
  
    render () {
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
        <Pokemon              
        pokemon={this.state.searchPokemon[this.state.pokedexPosition]}/>
  
        <Arrow xablau = {this.changePokemon}/>      
      </div>
   </>
    )
  
  };   

}
