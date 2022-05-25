import React from "react";
import "./styles.css"


const ModalPortal = (props)=>{
    const response = props.time
    
    return (
        <div className="modal">
            <h3>{response.messagge}</h3>
            <span onClick={props.removeModal}>✖</span>
        </div>
    )
};

export default ModalPortal;