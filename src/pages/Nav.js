import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="Nav">
      <p>Logo</p>
      <ul>
        <Link style={navStyle} to="/">
          <li id="navbutton">HOME</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>ABOUT</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>SHOP</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
