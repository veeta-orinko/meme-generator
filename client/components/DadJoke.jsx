import React, { useState, useEffect } from 'react'
import { getDadJoke } from '../apiClient'

export default function DadJoke() {
  const [text, setText] = useState('')

  useEffect(() => {
    getDadJoke()
      .then((response) => {
        setText(response)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <p className="textsize">Your dad joke of the day is:</p>
      <h1 className="center">{text.joke}</h1>
    </div>
  )
}
