import React, { useState, useEffect } from 'react'
import { getDadJoke } from '../apiClient'

export default function DadJoke() {
  const [text, setText] = useState('')

  useEffect(() => {
    getDadJoke().then((response) => {
      setText(response)
    })
  })
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
