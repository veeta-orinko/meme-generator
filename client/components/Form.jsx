import React, { useState } from 'react'

const initialData = { name: '' }

export default function AddName(props /*{ saveName }*/) {
  //props = toggleHidden
  const [data, setData] = useState(initialData)
  const { name } = data

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // saveName(data) //This is to setState at the App level
    setData(initialData)
    props.toggleHidden()
  }

  //visibility &&'no longer renders the form
  // ternary - ifTrue ? doThis : otherWiseDoThis
  // && - ifTrue && doThis
  return (
    <div id="form" hidden="">
      <h3 className="center">Add Your Name For Good Vibezzzz</h3>
      <form className="center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
        <button
          onClick={(e) => {
            e.preventDefault()
            setData(initialData)
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}
