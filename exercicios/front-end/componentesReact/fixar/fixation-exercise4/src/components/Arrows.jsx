import React, { Component } from "react";

export default class Arrow extends Component {
  
    
    render() {  
       


    return (
        <div className="arrows">

        <button onClick={this.props.xablau}>previous</button>
        <button onClick={this.props.xablau}>next</button>
        </div>  
  )
  }

}


 