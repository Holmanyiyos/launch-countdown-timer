import React, { useEffect, useState } from "react";
import { subtractDate } from "../../utilities/getTime.utilities";
import Timenum from "./components/TimeNum";

const Countdown = (props)=>{
    const [time, setTime] = useState("");
    const [start, setStart] = useState(false);

    
    useEffect(()=>{
        const time = subtractDate(props.timeSelected)
        if(props.isActive){
            setTime(time)
        }
    }, [start])
    
    if (props.isActive) {
        
        setInterval(()=>{
            setStart(!start)
        }, 1000)
    }


    return(
        <>
            <h2>Count Down</h2>
            {(time)? 
             <>
                <Timenum num={time.days}/>
                <span>Days</span>
                <Timenum num={time.hours}/>
                <span>Hours</span>
                <Timenum num={time.minutes} />
                <span>Minutes</span>
                <Timenum num={time.seconds} />
                <span>Seconds</span>
            </>:
            <p>Establecer hora</p>
            }
            
        </>
    )
}

export default Countdown;