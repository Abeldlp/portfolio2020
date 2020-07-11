import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }

  pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  pageSettings = {
    duration: 1,
    transition: "linear",
  };

  handleHover(e) {
    e.target.style.boxShadow = "0px 10px 12px 0px rgba(0,0,0,0.5)";
    e.target.style.transform = "translateY(-5px)";
  }
  handleHoverOut(e) {
    e.target.style.boxShadow = "0px 3px 5px 0px rgba(0,0,0,0.5)";
    e.target.style.transform = "translateY(5px)";
  }

  render() {
    return (
      <motion.div
        className="secondary-screen"
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
      >
        <h1 style={{ fontFamily: "Montserrat", color: "dodgerblue" }}>
          Projects
        </h1>
        <p style={{ width: "80%", paddingBottom: 10, fontFamily: "Roboto" }}>
          Fullstack, Frontend and Desings
        </p>
        <p style={{ width: "80%", paddingBottom: 10, fontFamily: "Roboto" }}>
          Most of projects are deployed with Heroku. Heroku's server tends to be
          slow, when you click on view live page, be patient while it loads.
          Thank you.
        </p>
        <motion.div style={styles.main_container}>
          <Link to="/code/fitness" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1 }}
            >
              FITNESS APP
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </Link>
          <Link to="/code/construction" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1.1 }}
            >
              CONSTRUCTION
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </Link>
          <Link to="/code/salarysystem" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1.2 }}
            >
              SALARY
              <br />
              MANAGER
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Fullstack
              </span>
            </motion.div>
          </Link>
          <Link to="/code/school" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1 }}
            >
              SCHOOL <br /> WEBSITE
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Frontend
              </span>
            </motion.div>
          </Link>

          <Link to="/code/laferrari" style={styles.link}>
            <motion.div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1.1 }}
            >
              LA FERRARI
              <br />
              <span style={{ color: "dodgerblue", letterSpacing: "1px" }}>
                Design
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
}

const styles = {
  main_container: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    maxHeight: "100%",
    width: "80%",
    flexWrap: "wrap",
  },
  secondary_container: {
    margin: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all ease-in-out 0.1s",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.5)",
    background: "white",
    color: "black",
    fontFamily: "Roboto",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    borderTop: "3px solid dodgerblue",
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
    width: "10em",
    height: "10em",
    borderRadius: 18,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
};
