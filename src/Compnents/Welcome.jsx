import React, { Component } from "react";

class Welcome extends Component{
  
  render(){
    const {name,states,city}=this.props
    return(
        <div>
        <h1>{name}</h1>
        <h2>{states}</h2>
        <h2>{city}</h2>
        </div>
    )
  }
};

export default Welcome;
