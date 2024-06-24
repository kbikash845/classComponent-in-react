import React, { Component } from "react";

class FunctionClick extends Component{

    clickHandler(){
        console.log("hii click me")
    }
    render(){

        return(
            <button onClick={this.clickHandler}>Click me</button>
        )
    }
}
export default FunctionClick;