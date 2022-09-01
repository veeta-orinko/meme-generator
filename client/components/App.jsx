import React, { useState, useEffect } from 'react'
import Form from './Form'

import { getWelcome } from '../apiClient'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [visibility, setVisibility] = useState(true)

  function toggleHidden() {
    setVisibility(false)
  }

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <div>
      <h1>{welcomeStatement}</h1>
      {visibility && <Form toggleHidden={toggleHidden} />}
    </div>
  )
}

export default App
