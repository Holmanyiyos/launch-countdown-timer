import React from "react";
import Timenum from "./components/TimeNum";
import "./styles.css"

const Countdown = (props)=>{
  const time = props.time;


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
            <Timenum num={"00"}/>
            <p>Days</p>
         </div>
         <div>
            <Timenum num={"00"}/>
            <p>Hours</p>
         </div>
         <div>
            <Timenum num={"00"} />
            <p>Minutes</p>
         </div>
         <div>
            <Timenum num={"00"} />
            <p>Seconds</p>
         </div>
        </>
            }
        </main>
    )
}

export default Countdown;