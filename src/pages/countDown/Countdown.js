import React from "react";
import Timenum from "./components/TimeNum";
import "./styles.css"

const Countdown = (props)=>{
  const time = props.time;


    return(
        <main className="countdown">
             <div>
                <Timenum num={time.days || "00"}/>
                <p>Days</p>
             </div>
             <div>
                <Timenum num={time.hours || "00"}/>
                <p>Hours</p>
             </div>
             <div>
                <Timenum num={time.minutes || "00"} />
                <p>Minutes</p>
             </div>
             <div>
                <Timenum num={time.seconds || "00"} />
                <p>Seconds</p>
             </div>
        </main>
    )
}

export default Countdown;