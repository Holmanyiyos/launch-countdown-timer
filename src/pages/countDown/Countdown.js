import React, { useEffect, useState } from "react";
import { subtractDate } from "../../utilities/getTime.utilities";
import Timenum from "./components/TimeNum";
import "./styles.css"

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
        <main className="countdown">
            {(time)? 
             <><div>
                <Timenum num={time.days}/>
                <p>Days</p>
             </div>
             <div>
                <Timenum num={time.hours}/>
                <p>Hours</p>
             </div>
             <div>
                <Timenum num={time.minutes} />
                <p>Minutes</p>
             </div>
             <div>
                <Timenum num={time.seconds} />
                <p>Seconds</p>
             </div>
            </>:
            <><div>
            <Timenum num={0}/>
            <p>Days</p>
         </div>
         <div>
            <Timenum num={0}/>
            <p>Hours</p>
         </div>
         <div>
            <Timenum num={0} />
            <p>Minutes</p>
         </div>
         <div>
            <Timenum num={0} />
            <p>Seconds</p>
         </div>
        </>
            }
        </main>
    )
}

export default Countdown;