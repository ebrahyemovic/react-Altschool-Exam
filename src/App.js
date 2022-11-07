import React, { useState } from 'react';
import useCounter from './customhook/usecounter'

// import './style.css';

export default function App() {
  
  const [count,Reset, Increment, Decrement] = useCounter(0, 1);
  
  const [inputValue, setInputValue] = useState('');
  


  const inputChange = (e) => {
    setInputValue(e.target.value)
  };

  const updateInput = () => {
    const value = Number(inputValue)
    if (isNaN(value)){
      setInputValue('')
    } else {
      setCount(value);
      setInputValue('')
    }
    
  }
  return (
    <div>
      <h1>Exam CounterApp</h1>
      <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset} disabled={count === 0}>
          Reset
        </button>
      </div>
      <div>
        <input onChange ={inputChange} value= {inputValue} />
        <button onClick = {updateInput} >setValue</button> 
        </div>
    </div>
  );
}
