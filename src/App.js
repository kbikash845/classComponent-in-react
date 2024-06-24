import React,{Component} from "react";
import Greet from "./Compnents/Greet";
import Welcome from "./Compnents/Welcome";
import Massage from "./Compnents/Massage";
import Counter from "./Compnents/Counter";
import FunctionClick from "./Compnents/FunctionClick";

class App extends Component{
 render(){
  return(
    <div>
    {/* <Greet name="Bikash kumar"/> */}
    {/* <Greet name="Vicky kumar" district="Siwan"/> */}
    {/* <Welcome name="Asrit Technology" states="punjab" city="mohali"/> */}
    {/* <Welcome name="Bikash kumar from siwan"/> */}
    {/* <Massage/> */}

  <FunctionClick/>
    </div>
  )
 }
}
export default App;