// import React, { useState, useEffect } from 'react'
// import { getRandomSnack } from '../server/db'

// export default function Snack() {
//   const [currentSnack, setSnack] = useState('')

//   useEffect(() => {
//     getRandomSnack()
//       .then((response) => setSnack(response))
//       .catch((err) => console.error(err))
//   })

//   return (
//     <div>
//       <h3>{getRandomSnack.name}</h3>
//       <img src={getRandomSnack.img} alt="" />
//     </div>
//   )
// }
