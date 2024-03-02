import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Coin = () => {
  const counter = useSelector((state)=>state.counter.count)
  const themeColor = useSelector((state)=>state.theme.color)
  return (
    <div>
        <h2 style={{color:themeColor}}>Current Redux Coin Count : {counter}</h2>
        <p>Above Redux coin count is accessed via redux state management</p>
    </div>
  )
}

export default Coin