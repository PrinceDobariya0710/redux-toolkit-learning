import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './themeSlice'

const Theme = () => {
    const [color,setColor] = useState('white')
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Theme component</h1>
        <input className='textbox' type="color" onChange={(e)=>{setColor(e.target.value)}}/> <br />
        <button className='button' onClick={()=>{ dispatch(changeTextColor(color))}}> Change Text Color</button>
    </div>
  )
}

export default Theme