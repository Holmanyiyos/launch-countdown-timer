import './App.css';
import React, { useState, useEffect } from "react";
import Countdown from "./pages/countDown/Countdown"
import Inputview from './pages/InputView/InputView';
import { subtractDate } from './utilities/getTime.utilities';
import Footer from './components/Footer';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [timeSelected, setTimeSelected] = useState("");
  const [time, setTime] = useState("");
  const [start, setStart] = useState(false);

  
  useEffect(()=>{
      const getTime = subtractDate(timeSelected)
      if(getTime != null){
        if(isActive){
            setTime(getTime)
        }
      }else{
        setIsActive(false)
        setTime("")
      }
  }, [start])
  
  if (isActive) {
      
      setInterval(()=>{
          setStart(!start)
      }, 1000)
  }

  

    function handleDateSelected(e){
       setTimeSelected(e.target.value)
    }

    function handleClick(){
      setIsActive(true)
  }

  return (
    <div className="App">
      <section className='main__section'>
        <Inputview handleDateSelected= {handleDateSelected} handleClick={handleClick}/>
        <p>WE'RE LAUNCHING SOON</p>
        <Countdown 
        time={time}/>
      </section>
        <Footer/>

    </div>
  );
}

export default App;
