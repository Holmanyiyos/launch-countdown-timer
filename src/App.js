import './App.css';
import React, { useState } from "react";
import Countdown from "./pages/countDown/Countdown"
import Inputview from './pages/InputView/InputView';
import { subtractDate } from './utilities/getTime.utilities';
import Footer from './components/Footer';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [timeSelected, setTimeSelected] = useState("");

    function handleDateSelected(e){
       setTimeSelected(e.target.value)
    }

    function handleClick(){
      setIsActive(true)
      subtractDate(timeSelected)
      console.log(timeSelected.length)
  }

  return (
    <div className="App">
      <section className='main__section'>
        <Inputview handleDateSelected= {handleDateSelected} handleClick={handleClick}/>
        <p>WE'RE LAUNCHING SOON</p>
        <Countdown 
        isActive = {isActive}
        timeSelected={timeSelected}/>
      </section>
        <Footer/>

    </div>
  );
}

export default App;
