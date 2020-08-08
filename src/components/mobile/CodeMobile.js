import React, { Component } from "react";
import { motion } from "framer-motion";
import { Accordion } from "react-bootstrap";

import { Link } from "react-router-dom";

import laptop from "../../PorfolioImages/weightless.png";

export default class CodeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
    };
  }
  pageTransition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100%",
    },
  };

  pageSettings = {
    duration: 0.5,
    transition: "linear",
  };

  render() {
    return (
      <motion.div
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            color: "dodgerblue",
            paddingTop: "15px",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            width: "80%",
            paddingBottom: 10,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          Fullstack, Frontend and Desings
        </p>
        <p
          style={{
            width: "80%",
            paddingBottom: 10,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          Most of projects are deployed with Heroku. Heroku's server tends to be
          slow, when you click on view live page, be patient while it loads.
          Thank you.
        </p>

        <motion.img
          src={laptop}
          alt="logo"
          style={styles.image}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ delay: 0.5 }}
        />

        <p style={{ width: "80%", padding: 10, fontFamily: "Roboto" }}>
          This is my latest project in progress. A fullstack application to keep
          track of your weight in graphs, and save records of your daily
          excercising.
        </p>

        {/*Main project buttons */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%",
            flexDirection: "column",
          }}
        >
          <motion.a
            href="https://youtu.be/EneWMa82oFQ"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.9 }}
            style={{
              fontFamily: "Roboto",
              color: "white",
              textDecoration: "none",
              backgroundColor: "dodgerblue",
              padding: "10px",
            }}
          >
            Watch video
          </motion.a>
          <motion.a
            href="https://github.com/Abeldlp/weightless"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.9 }}
            style={{
              fontFamily: "Roboto",
              color: "dodgerblue",
              textDecoration: "none",
              backgroundColor: "white",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            View Source Code
          </motion.a>
        </motion.div>

        <h2 style={{ fontFamily: "Montserrat", padding: "20px 0" }}>
          Other Projects
        </h2>
        
        <motion.div style={styles.main_container}>
          <Link to="/projects/salarymanager" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.6 }}
            >
              SALARY MANAGER
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </Link>
          <Link to="/projects/constructionfjd" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.7 }}
            >
              CONSTRUCTION
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </Link>
          <Link to="/projects/fitnessapp" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.8 }}
            >
              FITNESS APP
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </Link>
          {/*TRYING TO MAKE THIS TEXT DISSAPEAR
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            This is the text and I need to see if I can make this dissapear
          </motion.div>
          */}

          <Link to="/projects/school" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.9 }}
            >
              SCHOOL WEBSITE
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </Link>

          <Link to="/projects/laferrari" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1 }}
            >
              LA FERRARI
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Design
              </span>
            </motion.div>
          </Link>
        </motion.div>
        <Accordion />
      </motion.div>
    );
  }
}

const styles = {
  image: {
    width: "80%",
    paddingBottom: "20px",
    boxShadow: "2px 14px 31px -13px rgba(0,0,0,0.75)",
  },
  main_container: {
    display: "flex",
    justifyContent: "space-around",
    alingItems: "center",
    height: "100%",
    width: "90%",
    flexWrap: "wrap",
  },
  secondary_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //transition: "all ease-in-out 0.2s",
    //boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.5)",
    background: "white",
    color: "black",
    fontFamily: "Roboto",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTop: "1.5px solid dodgerblue",
    fontWeight: "bold",
  },
  icon: {
    height: "30px",
  },
  anchors: {
    textDecoration: "none",
    color: "white",
  },
  laptop: {
    position: "absolute",
    top: "30%",
    width: "100%",
    zIndex: -1,
  },
  link: {
    width: "100%",
    height: "20%",
    borderRadius: 18,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
};
