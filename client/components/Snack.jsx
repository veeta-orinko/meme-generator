import React from 'react'

export default function Snack(props) {
  return (
    <div>
      <h3>You will crave {props.snackImage.name}:</h3>
      <img src={props.snackImage.image} alt="" />
    </div>
  )
}
