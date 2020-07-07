import React, { Component } from "react";
import logo from "../../PorfolioImages/logo.png";
//import serMe from "../PorfolioImages/no-background-big-touched.png";
import { motion } from "framer-motion";
import Sea from "../../PorfolioImages/sea.jpg";

export default class IntroMobile extends Component {
  render() {
    return (
      //Check if it is neccesary
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
          backgroundImage: "url(" + Sea + ")",
          backgroundSize: "cover",
          position: "relative",
          zIndex: -1,
        }}
      >
        <motion.img
          src={logo}
          style={styles.logo}
          alt="logo"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ delay: 1 }}
        />
        {/* IMAGE TO COVER FULL SCREEN <div className="self-portrait"></div>*/}
        {/*<img src={serMe} style={styles.selfMe} alt="logo" /> */}
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
        ></motion.div>
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    opacity: 1,
  },
  link: {
    textDecoration: "none",
  },
};
