import React, { useState, useEffect } from 'react'
import Form from './Form'
import DadJoke from './DadJoke'
import Shiba from './Shiba'
import Snack from './Snack'

import { getWelcome, getSnack } from '../apiClient'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [snack, setSnack] = useState('')
  const [userName, setUserName] = useState('')

  const [visibility, setVisibility] = useState(true)

  function toggleHidden() {
    setVisibility(!visibility)
  }

  function saveName(data) {
    setUserName(data.name)
  }

  console.log(typeof userName)

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
        //console.log(res)
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
      {!visibility && (
        <h2 className="center">{`${userName}, here's what to look forward to today...`}</h2>
      )}

      {visibility && <Form toggleHidden={toggleHidden} saveName={saveName} />}
      {!visibility && (
        <div className="dadjoke">
          {' '}
          <DadJoke />
        </div>
      )}
      <div className="container">
        {!visibility && <Snack snackImage={snack} />}
        {!visibility && <Shiba />}
      </div>

      {/* need a new user button to unhide */}
    </div>
  )
}

export default App
