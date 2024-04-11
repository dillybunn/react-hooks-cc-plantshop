import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const initialState = { name: "", image: "", price: "" };
  const [newPlant, setNewPlant] = useState(initialState);

  const handleChange = (e) => {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: newPlant.price,
      }),
    })
      .then((r) => r.json())
      .then((plants) => {
        addPlant(plants);
        setNewPlant(initialState);
      });
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newPlant.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={newPlant.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={newPlant.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
