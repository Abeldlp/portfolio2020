import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <h1 style={{ fontFamily: "Montserrat", color: "dodgerblue" }}>
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
        <motion.div style={styles.main_container}>
          <div style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.6 }}
            >
              FITNESS APP
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </div>
          <div style={{ display: "auto" }}>
            <p style={{ display: "none" }}>
              Fullstack application to keep track of your exercises routine. You
              can create, update, delete and get all the data from the database.
              Try it out!
            </p>
          </div>
          <div style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.7 }}
            >
              SCHOOL WEBSITE
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </div>
          <div style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.8 }}
            >
              CONSTRUCTION
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </div>
          <div style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.9 }}
            >
              SALARY MANAGER
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </div>
          <div style={styles.link}>
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
          </div>
          <div style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1.1 }}
            >
              TRIGERED
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}

const styles = {
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
