import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contact from "./Contact";

const Header = () => {
  return (
    <div>
      <img src="./logo.svg" alt="Logo" />
      <Router>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

        <Switch>
          <Aboutus path="/about" />
          <Contact path="/contact" />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
