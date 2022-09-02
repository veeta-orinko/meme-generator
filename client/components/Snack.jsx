import React from 'react'
//import { getRandomSnack } from '../server/db'

export default function Snack(props) {
  //const [currentSnack, setSnack] = useState('')

  // useEffect(() => {
  //   getRandomSnack()
  //     .then((response) => setSnack(response))
  //     .catch((err) => console.error(err))
  // })

  return (
    <div>
      <img src={props.snackImage.image} alt="" />
    </div>
  )
}
