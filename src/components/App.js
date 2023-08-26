import { useState, useEffect } from "react"

const App = () => {
  const [dogPic, setDogPic] = useState(null)
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((dogPic) => {
      setDogPic(dogPic.message)
    })


  }, [])
  if(!dogPic) return <p>Loading</p>
  return(
  <img src={dogPic} alt="A random Dog"/>

  )
}
export default App
