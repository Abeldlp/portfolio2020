import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const [digimons, setDigimons] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://digimon-api.herokuapp.com/api/digimon");
    const digimons = await data.json();
    console.log(digimons);

    setDigimons(digimons);
  };

  return (
    <div className="shop-body">
      <h1>Shop</h1>
      <h2>All our items listed below</h2>
      <div className="digimon-box">
        {digimons.map((digimon) => (
          <Link style={linkStyle} to={`/shop/${digimon.name}`}>
            <div className="one-digimon-box">
              <p>{digimon.name}</p>
              <img src={digimon.img} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
