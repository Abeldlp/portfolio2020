import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//FIGURE OUT THIS API

const Digimondetails = ({ match }) => {
  useEffect(() => {
    fetchDigimon();
  }, []);

  const [digimon, setDigimon] = useState({});

  const fetchDigimon = async () => {
    const data = await fetch(
      `https://digimon-api.herokuapp.com/api/digimon/${match.name}`
    );
    const singledigimon = await data.json();
    console.log(singledigimon);

    setDigimon(singledigimon);
  };
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
};

export default Digimondetails;
