import React, { useState, useEffect } from "react"

function DogSpan({ dogs }) {
   console.log(dogs)
   const spans = dogs.map((dog) => (
    <span key={dog.id} {dog.name} />
   ))

   
    return (
        
       <div id="dog-bar">{spans}</div>
        
    )
}




export default DogSpan



