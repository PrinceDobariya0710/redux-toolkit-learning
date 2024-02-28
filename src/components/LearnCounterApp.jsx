import {React, useState} from 'react'

const LearnCounterApp = () => {
  const [count,setCount] = useState(0)

  const handleCount = (e) =>{
    if(e.target.id == "increment"){
        setCount(count+1)
    }
    else{
        setCount(count-1)
    }
  }
  return (
    <div>
        <h1>Counter App without Redux</h1>
        <h2>Current Count : {count}</h2>
        <button id="increment" onClick={handleCount}>Increment</button>
        <button id='decrement' onClick={handleCount}>Decrement</button>
    </div>
  )
}

export default LearnCounterApp