import { useState } from 'react'

import './App.css'

function App() {
  const [counter , setCounter]= useState(0);
  
 
 const addValue =()=>{
  console.log("clicked",counter);
  setCounter(counter+1)
  //counter =counter+1;
  
}
const reduceValue = ()=>{
  console.log("clicked",counter);
  setCounter(counter-1)
  
}

  return (
    <>
      <h1>Hello There</h1>
      <h2>Counter value :{counter}</h2>

    <button onClick={addValue}>Add value</button>
    <button onClick={reduceValue}>Remove value</button>


    </>
  )
}

export default App
