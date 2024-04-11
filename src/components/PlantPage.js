import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState([]);

  const addPlant = (formData) => {
    setPlants([...plants, formData]);
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search query={query} setQuery={setQuery} />
      <PlantList query={query} plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
