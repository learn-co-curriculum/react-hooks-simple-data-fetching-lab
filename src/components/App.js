import React, { useState, useEffect } from 'react';

function App() {
  const [Image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
      
        setImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={Image} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
