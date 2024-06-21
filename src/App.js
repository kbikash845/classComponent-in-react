import React,{Component} from "react";
import Greet from "./Compnents/Greet";
import Welcome from "./Compnents/Welcome";

class App extends Component{
 render(){
  return(
    <div>
    <Greet/>
    <Welcome/>
    </div>
  )
 }
}
export default App;