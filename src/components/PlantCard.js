import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const [isInStock, setIsInStock] = useState(true);

  const toggleStock = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={toggleStock} type="button" className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={toggleStock} type="button">
          Out of Stock
        </button>
      )}
      {/* <button onClick={() => deletePlant(id)} type="button">
        Delete
      </button> */}
    </li>
  );
}

export default PlantCard;
