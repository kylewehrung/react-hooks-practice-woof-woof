// import React, { useState, useEffect } from "react";
// import DogBar from "./DogBar"


// function App() {
// const [dogs, setDogs] = useState([])


// useEffect(() => {
//   fetch("http://localhost:3001/pups")
//   .then((response) => response.json())
//   .then(setDogs)
// }, [])


//   return (
//     <div className="App">
//       <div id="filter-div">
//         <button id="good-dog-filter">Filter good dogs: OFF</button>
//       </div>
//         <DogBar dogs={dogs} />
//       <div id="dog-summary-container">
//         <h1>DOGGO:</h1>
//         <div id="dog-info"></div>
//       </div>
//     </div>
//   );
// }

// export default App;
// //////////////////////////////////////////////////


// import React, { useState } from "react"


// function DogBar({ dogs }) {
//     const spans = dogs.map((dog) => {
//        return <span
//         key={dog.id}
        
//         >{dog.name}</span>
//     })

// return (

//     <div id="dog-bar">{spans}</div>
// )
// }

// export default DogBar

// ////////////////////////////////////////////////////////