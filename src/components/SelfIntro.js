import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../PorfolioImages/logo.png";
//import serMe from "../PorfolioImages/no-background-big-touched.png";
import { motion } from "framer-motion";

export default class SelfIntro extends Component {
  render() {
    return (
      //Check if it is neccesary
      <motion.div className="self-part">
        <motion.img
          src={logo}
          style={styles.logo}
          alt="logo"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{delay: 1}}
        />
        
        <div className="intro-text">
          <h1 style={styles.fontStyle1}>ABEL DLP</h1>
          <h1 style={styles.fontStyle2}>Web Developer</h1>
        </div>
        <motion.div
          className="navbar"
          style={styles.navbar}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <Link to="/" id="nav-item">
            Me
          </Link>
          <Link to="/about" id="nav-item">
            About
          </Link>
          <Link to="/code" id="nav-item">
            Projects
          </Link>
          <Link to="/contact" id="nav-item">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    );
  }
}

const styles = {
  logo: {
    width: 80,
    height: 80,
    padding: 20,
    position: "relative",
    top: "10%",
    zIndex: 1,
  },
  selfMe: {
    height: "40%",
    position: "absolute",
    borderRadius: "100%",
    boxShadow: "inset 0px 0px 27px 5px #7dd3e4",
    marginTop: "10%",
    opacity: 0.95,
  },
  fontStyle1: {
    color: "white",
    fontSize: 50,
    letterSpacing: 5,
    position: "relative",
    fontFamily: "Montserrat",
  },
  fontStyle2: {
    color: "white",
    fontSize: 30,
    position: "relative",
    fontFamily: "Montserrat",
    left: 50,
    bottom: 25,
  },
  navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20,
    position: "relative",
    fontFamily: "Montserrat",
    backgroundColor: "rgba(30, 143, 255, 0.3)",
    opacity: 1,
  },
  link: {
    textDecoration: "none",
  },
};
