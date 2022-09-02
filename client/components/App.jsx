import React, { useState, useEffect } from 'react'
import Form from './Form'
import DadJoke from './DadJoke'
import Shiba from './Shiba'
import Snack from './Snack'

import { getWelcome, getSnack } from '../apiClient'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [snack, setSnack] = useState('')

  const [visibility, setVisibility] = useState(true)

  function toggleHidden() {
    setVisibility(!visibility)
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

  useEffect(() => {
    getSnack()
      .then((res) => {
        setSnack(res)
        console.log(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  //second parameter of useEffect (Para1=function, and para2= what items useEffect watches)
  // "use the function in para1 whenever something I'm watching is affected"

  return (
    <div>
      <h1 className="center">{welcomeStatement}</h1>

      {visibility && <Form toggleHidden={toggleHidden} />}
      {!visibility && <DadJoke />}
      {!visibility && <Snack />}

      <div className="dadjoke">
        <DadJoke />
      </div>

      <div className="container">
        <Snack snackImage={snack} />
        <Shiba />

        {/* need a new user button to unhide */}
      </div>
    </div>
  )
}

export default App
