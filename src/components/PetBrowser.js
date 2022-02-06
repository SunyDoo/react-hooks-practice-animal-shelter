import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  

  const petsToDisplay= pets
  return <div className="ui cards">{
    petsToDisplay.map((pet) => (
      <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
    ))
  }</div>;
}

export default PetBrowser;
