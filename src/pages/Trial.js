import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Animals = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [animals, setAnimals] = useState([]);

  const fetchData = async () => {
    const data = await fetch("/shop");
    const animals = await data.json();

    setAnimal(animals);
  };

  return (
    <div>
      <h1>Animals list</h1>
      {animals.map((animal) => (
        <Link to={`shop/${animal.name}`}>
          <div>
            <p>{animal.name}</p>
            <img src={animal.img} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Animals;
