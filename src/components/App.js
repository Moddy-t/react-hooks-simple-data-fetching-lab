// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Set the fetched image URL and update loading state
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setLoading(false); // Ensure loading state is turned off even if there is an error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
