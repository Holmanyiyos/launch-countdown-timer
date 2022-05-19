import React from "react"

const Input = (props)=>{
    return(
        <>
            <input type="datetime-local" name="date" id="date" onChange={props.handleDateSelected}/>  
        </>
    )
}

export default Input;