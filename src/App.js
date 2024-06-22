import React,{Component} from "react";
import Greet from "./Compnents/Greet";
import Welcome from "./Compnents/Welcome";

class App extends Component{
 render(){
  return(
    <div>
    {/* <Greet name="Bikash kumar"/> */}
    {/* <Greet name="Vicky kumar"/> */}
    <Welcome name="Asrit Technology"/>
    <Welcome name="Bikash kumar from siwan"/>
    </div>
  )
 }
}
export default App;