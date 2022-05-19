import './App.css';
import React, { useState } from "react";
import Countdown from "./pages/countDown/Countdown"
import Inputview from './pages/InputView/InputView';
import { subtractDate } from './utilities/getTime.utilities';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [timeSelected, setTimeSelected] = useState("");

    function handleDateSelected(e){
       setTimeSelected(e.target.value) 
    }

    function handleClick(){
      setIsActive(true)
      subtractDate(timeSelected)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Inputview handleDateSelected= {handleDateSelected} handleClick={handleClick}/>
        <Countdown 
        isActive = {isActive}
        timeSelected={timeSelected}/>
      </header>
    </div>
  );
}

export default App;
