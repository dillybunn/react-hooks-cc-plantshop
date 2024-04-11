import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ query, plants, setPlants }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, [query]);

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(query.toLowerCase());
  });

  const plantCards = filteredPlants.map((plant) => {
    return <PlantCard key={plant.name} plant={plant} />;
  });

  return (
    <ul className="cards">
      {plantCards}
      {}
    </ul>
  );
}

export default PlantList;
