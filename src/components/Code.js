import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//IMAGES IMPORT HOLDER
import html from "../PorfolioImages/html.png";
import css from "../PorfolioImages/css.png";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);

    this.state = {
      projects: [
        {
          name: "INTRO",
          backorFront: "Frontend",
          icons: [{ icon: html }, { icon: css }],
        },
      ],
    };
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
    staggerChildren: 0.1,
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
        <h1>Projects</h1>
        <p style={{ width: "80%", paddingBottom: 10 }}>
          Sample projects of frontend and backend services
        </p>
        <div style={styles.main_container}>
          <Link to="/code/fitness" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              FITNESS APP
            </div>
          </Link>
          <Link to="/code/school" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              SCHOOL WEBSITE
            </div>
          </Link>
          <Link to="/code/construction" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              CONSTRUCTION
            </div>
          </Link>
          <Link to="/code/jab" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              JAB
            </div>
          </Link>
          <Link to="/code/last" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              LAST ONE
            </div>
          </Link>
          <Link to="/code/tri" style={styles.link}>
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              TRIGERED
            </div>
          </Link>
        </div>
        <p style={{ width: "80%", paddingBottom: 10 }}>
          There are pages within this code section that will be visible. There
          are others that you will only be able to see the code pushed to
          github.
        </p>
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
    width: "80%",
    flexWrap: "wrap",
  },
  secondary_container: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all ease-in-out 0.2s",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.5)",
    background:
      "linear-gradient(124deg, rgba(73,70,128,1) 0%, rgba(132,132,203,1) 52%, rgba(0,212,255,1) 100%) fixed",
    color: "white",
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
    width: "150px",
    height: "150px",
    borderRadius: 18,
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
