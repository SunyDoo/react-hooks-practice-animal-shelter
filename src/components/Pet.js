import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {

  const [isAdopted, setIsAdopted] = useState(pet.isAdopted)
  function handleAdopt(){
    setIsAdopted(isAdopted=>!isAdopted)
    onAdoptPet(pet.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">{pet.name}</span>
        <div className="meta">
          <span className="date">{pet.type}{pet.gender === "male" ? ' ♂' : ' ♀'}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">{
        isAdopted? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={handleAdopt}>Adopt pet</button>
      }</div>
    </div>
  );
}

export default Pet;
