import React, { useState } from 'react'

const ColorChange = ({props}) => {
    const [activeColor, setActiveColor] = useState('')
    const getColor = (e)=>{
    setActiveColor(e.target.value)
    props(e.target.value)
  }
  return (
    <div style={{textAlign:'center'}}>
        <input type="text" name='color' placeholder='enter color to change' onChange={getColor} value={activeColor}/>
    </div>
  )
}

export default ColorChange;