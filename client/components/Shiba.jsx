import React, { useState, useEffect } from 'react'
import { getShiba } from '../apiClient'

export default function Shiba() {
  const [image, setImage] = useState('')

  useEffect(() => {
    getShiba()
      .then((response) => {
        console.log(response)
        setImage(response[0])
      })
      .catch((err) => console.error(err.message))
  }, [])

  return (
    <div>
      <img src={image} alt="random shiba" />
    </div>
  )
}
