import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  function addValue() {
    if (counter === 20){

    }
    else{
      setCounter(counter+1)
    }
      
  }
 
  function removeValue() {
    if (counter === 0) {

    }
    else {
      setCounter(counter - 1)

    }

  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
