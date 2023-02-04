import React, { useState, useEffect } from "react";
import DogBar from "./DogBar"
import Details from "./Details";

function App() {
const [dogs, setDogs] = useState([])
const [selectedDogId, setSelectedDogId] = useState(null)
const [goodDogs, setGoodDogs] = useState(false)

useEffect(() => {
  fetch("http://localhost:3001/pups")
  .then((response) => response.json())
  .then(setDogs)
}, [])


function onUpdateDog(updatedDog) { //some crazy shit going on here
  const updateDogs = dogs.map((dog) => 
  dog.id === updatedDog.id ? updatedDog: dog
  )
  setDogs(updateDogs)
}


const selectedDog = dogs.find((dog) => dog.id === selectedDogId) 

let displayDogs = dogs
if (goodDogs) {
  displayDogs = displayDogs.filter((dog) => dog.isGoodDog)
}

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
        <DogBar dogs={displayDogs} onClickDog={setSelectedDogId} />
        <Details dog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
