import React from "react"

function DogDetails({ dog }) {

    const { id, name, image, isGoodDog } = dog
    
    
    return (
      
         <div id="dog-summary-container">
         <h1>DOGGO:</h1>
         <div id="dog-info">
         <img src={image} alt={name}/>
         <h2>{name}</h2>
         <button>Good Dog</button>
        </div>
       </div>
    )

}

export default DogDetails