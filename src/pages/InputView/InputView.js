import React from "react";
import Input from "./components/Input";

const Inputview = (props)=>{
    return(
        <section className="input">
            <h3>Tu fecha</h3>
            <Input handleDateSelected = {props.handleDateSelected} />
            <button onClick={props.handleClick}>Iniciar contador</button>
        </section>
    )
}

export default Inputview;