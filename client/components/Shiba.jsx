import React, { useState, useEffect } from 'react'
import { getShiba } from '../apiClient'

export default function Shiba() {
  const [image, setImage] = useState('')

  useEffect(() => {
    getShiba()
      .then((response) => {
        //console.log(response)
        setImage(response[0])
      })
      .catch((err) => console.error(err.message))
  }, [])

  return (
    <div>
      <h3>This is your spirit-shiba:</h3>
      <img src={image} alt="shiba dog" />
    </div>
  )
}
