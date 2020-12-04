import React, { useState, useEffect } from 'react'

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([])

  useEffect(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        setPeopleInSpace(data.people)
      })
  }, []) 
  // use an empty dependencies array, so we only run the fetch request ONCE

  return (
    <div>
      {peopleInSpace.map(person => person.name)}
    </div>
  )
}

export default App