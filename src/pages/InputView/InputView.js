import React from "react";
import Input from "./components/Input";

const Inputview = (props)=>{
    return(
        <>
            <Input handleDateSelected = {props.handleDateSelected} />
            <button onClick={props.handleClick}>Iniciar contador</button>
        </>
    )
}

export default Inputview;