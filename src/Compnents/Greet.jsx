import React from "react";

function Greet(props){
    console.log("props__",props)
    return(
        <div>
            <h2>Vicky kumar</h2>
            <h1>{props.name}</h1>
        </div>
    )
}
export default Greet;