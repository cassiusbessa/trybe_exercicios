import React, { Component } from "react";

export default class Search extends Component {
  
    
    render() {  
        


    return (
        <div className="search">
        <input onChange={this.props.onChange} type="text" placeholder="Pesquise pelo tipo, número ou nome" />       
        </div>  
  )
  }

}


 