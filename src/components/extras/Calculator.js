import React, { useState } from "react";
import './Calculator.css'

function Calculator() {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');

  const handleClick = (e) => {
    setResult(history + result.concat(e.target.name))
    setHistory('')
  }
  const clear = () => {
    setResult('')
    setHistory('')
  }
  const back = () => {
    setHistory(result)
    setResult('')
  }
  const flip = ()=>{
    setResult((result*-1).toString())
  }
  const calculate = () => {
    try{
      setResult(Function(result).toString())
      setHistory('')
    }catch{
      setResult('Error')
      setTimeout(()=>{
        setResult('')
        setHistory('')
      },750)}
    
  }

  return (
    <div className="calculator">
      <div className="display">
        {result}
      </div>
      <div className="buttons">
        <button onClick={clear} className='double calc_button'>AC</button>
        <button className="calc_button" onClick={back}>C</button>
        <button className="calc_button" name="/" onClick={handleClick}>&divide;</button>
        <button className="calc_button" name="7" onClick={handleClick}>7</button>
        <button className="calc_button" name="8" onClick={handleClick}>8</button>
        <button className="calc_button" name="9" onClick={handleClick}>9</button>
        <button className="calc_button" name="*" onClick={handleClick}>*</button>
        <button className="calc_button" name="4" onClick={handleClick}>4</button>
        <button className="calc_button" name="5" onClick={handleClick}>5</button>
        <button className="calc_button" name="6" onClick={handleClick}>6</button>
        <button className="calc_button" name="-" onClick={handleClick}>-</button>
        <button className="calc_button" name="1" onClick={handleClick}>1</button>
        <button className="calc_button" name="2" onClick={handleClick}>2</button>
        <button className="calc_button" name="3" onClick={handleClick}>3</button>
        <button className="calc_button" name="+" onClick={handleClick}>+</button>
        <button className="calc_button" name="0" onClick={handleClick}>0</button>
        <button className="calc_button" name="." onClick={handleClick}>.</button>
        <button className="calc_button" name="" onClick={flip}>+/-</button>
        <button className="calc_button" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;