import React from "react";
import './GrandChild1.css'

const GrandChild1 = (props) => {
    console.log(props)
    return (
        <div className="GrandChild1" style={{backgroundColor:props.color}} >
        <h2>{props.heading}</h2>
        {props.description && <p>description goes here:{props.description}</p>}
        </div>
    )
}
export default GrandChild1