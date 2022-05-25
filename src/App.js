import './App.css';
import ReactDOM  from 'react-dom';
import React, { useState } from "react";
import Countdown from "./pages/countDown/Countdown"
import Inputview from './pages/InputView/InputView';
import { subtractDate } from './utilities/getTime.utilities';
import Footer from './components/Footer';
import ModalPortal from './components/Modal';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [timeSelected, setTimeSelected] = useState("");
  const [userTimeSelected, setUserTimeSelected] = useState("");
  const [time, setTime] = useState("");

  function validateState(){
    const getTime = subtractDate(timeSelected)
    setTime(getTime)
    if(!getTime.hours){
      setIsActive(false)
    }
  }

  if(isActive) {
   setTimeout(() => {
     validateState()
   }, 1000);
  }
  

  function handleDateSelected(e){
    setUserTimeSelected(e.target.value)
  }

  function handleClick(){
    setTimeSelected(userTimeSelected)
    setIsActive(true)
  }

  const removeModal =()=>{
    setTime("")
}

  return (
    <div className="App">
      {time.messagge && ReactDOM.createPortal(
      <ModalPortal time={time} removeModal={removeModal}/>, 
      document.querySelector("#modal"))}
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
