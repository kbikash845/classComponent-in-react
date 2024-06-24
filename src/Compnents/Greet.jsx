import React from "react";

function Greet(props){
    // console.log("props__",props)
    const {name,district}=props
    return(
        <div>
            <h2>Vicky kumar</h2>
            <h1>{name}</h1>
            <h2>{district}</h2>
        </div>
    )
}
export default Greet;