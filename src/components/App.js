import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((items) => setPets(items));    
  }, []);

  function onFindPetsClick(){    
      if (filters === "all") {
        fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((items) => setPets(items));        
      } else {
      fetch(`http://localhost:3001/pets?type=${filters}`)
      .then((r) => r.json())
      .then((items) => setPets(items));
      }
  }
   

  function onChangeType(filter) {
    setFilters(filter);
  }


function onAdoptPet(id){
  const updatedPets = [...pets]
  fetch(`http://localhost:3001/pets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isAdopted: true,
        }),
      })
      .then((r) => r.json())
      .then((adoptedPet) => setPets([...updatedPets, adoptedPet]));
}
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
          <Filters
            filter={filters}
            onFindPetsClick={onFindPetsClick}
            onChangeType={onChangeType}
          />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
