import React, { useState, useEffect } from 'react'
import List from './components/List'
import axios from 'axios'
import './App.css';

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    axios.get("https://dog.ceo/api/breed/hound/images")
    .then(res => {
      setDogs(res.data.message)
    })
  }, [])
  return (
    <div className="App">
      {dogs.map((dog, index) => {
         return <List key={index} dog={dog}/>
      })}
    </div>
  );
}

export default App;


// "https://random.dog/80a8c758-1ee8-4460-96c6-cb31716a269c.jpg"