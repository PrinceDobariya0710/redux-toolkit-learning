import {React, useState} from 'react'

const LearnCounterApp = () => {
  const [count,setCount] = useState(0)

  return (
    <div>
        <h1>Counter App without Redux</h1>
        <h2>Current Count : {count}</h2>
        <button id="increment" onClick={()=>{setCount(count+1)}}>Increment</button>
        <button id='decrement' onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default LearnCounterApp