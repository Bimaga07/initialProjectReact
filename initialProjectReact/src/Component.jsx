import React, { useState } from 'react'

export default function Component() {
    const [text, setText] = useState()
    const [text2, setText2] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonOnClick = () => {
        setText2(text)
    }
    
  return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>texto input: {text} </p>
        <p>texto actualizado: {text2} </p>
    </div>
  )
}
