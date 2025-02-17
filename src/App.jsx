import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [number,setNumber] = useState(0);

  function increment(){
    setCount((preCount) => {
      return preCount += number;
    })
  }

  function decrement(){
    setCount((preCount) => {
      if(preCount-number >= 0){
        return preCount -= number;
      } else {
        return preCount;
      }
    })
  }

  return (
    <section className='flex flex-col gap-5 justify-center items-center mt-10'>
      <h1 className='text-2xl'>Counter</h1>
      <h2 className='text-5xl'>{count}</h2>
      <input type='number'  className='border' onChange={ (e) => {
        setCount(0);
        setNumber(parseInt(e.target.value.trim()));
      }}></input>
      <section className='flex flex-row gap-3'>
        <button className='w-30 h-10 border' onClick={increment}>increment</button>
        <button className='w-30 h-10 border' onClick={decrement}>decrement</button>
      </section>
    </section>
  ) 
}

export default App
