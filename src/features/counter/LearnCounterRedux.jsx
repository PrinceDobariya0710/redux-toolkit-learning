import {React} from 'react'

// below are actions imported from Slice
import { decrement, increment, incrementByAmount } from './counterSlice'
//useSelector to get state and useDispatch to run action methods
import { useSelector, useDispatch } from 'react-redux'


const LearnCounterRedux = () => {
    const count = useSelector((state) => state.counter.count)
    const themeColor = useSelector((state)=>state.theme.color)
    const dispatch =  useDispatch()
  return (
    <div>
        <h1>Learn Counter with Redux</h1>
        <span className='value' style={{color: themeColor}} >Redux Count : {count}</span><br />
        <button className="button" aria-label='Increment Value' onClick={()=> {dispatch(increment())}}>Increment</button>
        <button className="button" aria-label='Decrement Value' onClick={()=> {dispatch(decrement())}}>Decrement</button>
        <br />
        <button className="button" aria-label='Step' onClick={()=> {dispatch(incrementByAmount(10))}}>Increment by 10</button>
    </div>
  )
}

export default LearnCounterRedux