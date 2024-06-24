import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    Increment(){
      this.setState(preState=>({
        count:preState.count+1
      }))
    }

    render(){
        return(
            <div>
                <h1>Count:={this.state.count}</h1>
                <button onClick={()=>this.Increment()}>incremenet</button>
            </div>
        )
      
        
    }
};

export default Counter;