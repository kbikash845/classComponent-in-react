

import React, { Component } from "react";

class Massage extends Component{
    constructor(){
        super()
        this.state={
            massage:"hello Bikash How are you"
        }
    } 
    changeHandler(){
        this.setState({
            massage:"thanks for subcribe"
        })
    }
    render(){
        return(
            <div>
             <h1>{this.state.massage}</h1>
             <button onClick={()=>this.changeHandler()}>Subscribe</button>
            </div>
        )
    }
}
export default Massage;