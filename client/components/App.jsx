import React, { useState, useEffect } from 'react'
import Form from './Form'
import DadJoke from './DadJoke'
import Sheba from './Sheba'
import Snack from './Snack'

import { getWelcome, getSnacks } from '../apiClient'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [snacks, setSnacks] = useState('')

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

  //causes error - need help
  useEffect(() => {
    getSnacks()
      .then((res) => {
        console.log(res)
        setSnacks(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  //second parameter of useEffect (Para1=function, and para2= what items useEffect watches)
  // "use the function in para1 whenever something I'm watching is affected"

  return (
    <div>
      <h1>{welcomeStatement}</h1>
      {/* personal message to user */}

      {visibility && <Form toggleHidden={toggleHidden} />}
      {!visibility && <DadJoke />}

      {!visibility && <Snack />}

      {!visibility && <Sheba />}

      {/* need a new user button to unhide */}
    </div>
  )
}

export default App
