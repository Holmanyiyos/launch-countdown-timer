import React from "react";
import Input from "./components/Input";
import "./styles.css"

const Inputview = (props)=>{
    return(
        <section className="input">
            <h3>Your Date</h3>
            <Input handleDateSelected = {props.handleDateSelected} />
            <button onClick={props.handleClick}>Start Countdown</button>
        </section>
    )
}

export default Inputview;