import React, { Component } from "react";
import logo from "../../PorfolioImages/logo.png";
//import serMe from "../PorfolioImages/no-background-big-touched.png";
import { motion } from "framer-motion";
import Sea from "../../PorfolioImages/sea.jpg";
import { Link } from "react-router-dom";

export default class IntroMobile extends Component {
  render() {
    return (
      //Check if it is neccesary
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: "url(" + Sea + ")",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <motion.img
          src={logo}
          style={styles.logo}
          alt="logo"
          initial={{ opacity: 1, scale: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: -10 }}
          exit={{ opacity: 1, scale: 0, y: 0 }}
          transition={{ delay: 0.5 }}
        />
        {/* IMAGE TO COVER FULL SCREEN <div className="self-portrait"></div>*/}
        {/*<img src={serMe} style={styles.selfMe} alt="logo" /> */}
        <motion.div className="intro-text">
          <motion.h1
            style={styles.fontStyle1}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            ABEL DLP
          </motion.h1>
          
          <motion.h1
            style={styles.fontStyle2}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Web Developer
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/me" style={styles.link}>
              <p style={styles.linktext}>Check out</p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
}

const styles = {
  
  linktext: {
    color: "white",
    padding: 10,
    border: "1.5px solid white",
    fontSize: 30,
    textAlign:"center",
    borderRadius:10
  },
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
