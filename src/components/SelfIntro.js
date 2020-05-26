import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../PorfolioImages/logo.png";

export default class SelfIntro extends Component {
  render() {
    return (
      <div className="self-part">
        <img src={logo} style={styles.logo} />
        <div className="self-portrait"></div>
        <div className="intro-text">
          <h1 style={styles.fontStyle1}>ABEL DLP</h1>
          <h1 style={styles.fontStyle2}>#Web.developer_</h1>
        </div>
        <div className="navbar" style={styles.navbar}>
          <Link to="/" exact id="nav-item">
            Me
          </Link>
          <Link to="/about" id="nav-item">
            About
          </Link>
          <Link to="/code" id="nav-item">
            Code
          </Link>
          <Link to="/contact" id="nav-item">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  logo: {
    width: 80,
    height: 80,
    padding: 20,
    position: "relative",
    left: "25%",
    zIndex: 1,
  },
  fontStyle1: {
    color: "white",
    fontSize: 50,
    letterSpacing: 5,
    position: "relative",
    top: 25,
  },
  fontStyle2: {
    color: "white",
    fontSize: 30,
    position: "relative",
    left: 50,
  },
  navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    opacity: 1,
  },
  link: {
    textDecoration: "none",
  },
};
