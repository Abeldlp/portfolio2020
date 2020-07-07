import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class SelfIntroMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openMenuBar = this.openMenuBar.bind(this);
  }

  openMenuBar() {
    if (this.state.open) {
      this.setState({
        open: false,
      });
    } else if (!this.state.false) {
      this.setState({
        open: true,
      });
    }
  }

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "fixed",
        }}
      >
        <motion.div
          onClick={this.openMenuBar}
          style={styles.navbar_container}
          variants={variants}
          animate={this.state.open ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          {/* 
        <div style={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/me">ME</Link>
          <Link to="/about">About</Link>
          <Link to="/Code">Code</Link>
          <Link to="/conact">Contact</Link>
        </div> */}
        </motion.div>
        <motion.div
          style={styles.container2}
          variants={variants2}
          animate={this.state.open ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          <Link onClick={this.openMenuBar} style={styles.link} to="/">
            INTRO
          </Link>
          <Link onClick={this.openMenuBar} style={styles.link} to="/me">
            ME
          </Link>
          <Link
            onClick={this.openMenuBar}
            style={styles.link}
            to="/about/mobile"
          >
            ABOUT
          </Link>
          <Link onClick={this.openMenuBar} style={styles.link} to="/projects">
            PROJECTS
          </Link>
          <Link onClick={this.openMenuBar} style={styles.link} to="/contact">
            CONTACT
          </Link>
        </motion.div>
      </div>
    );
  }
}

const variants = {
  open: { scale: 40, borderRadius: "100%", backgroundColor: "dodgerblue" },
  closed: { scale: 1, borderRadius: "100%", backgroundColor: "dodgerblue" },
};

const variants2 = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" },
};

const styles = {
  navbar_container: {
    display: "flex",
    height: "50px",
    width: "50px",
    overflowX: "hidden",
    justifyContent: "space-around",
    backgroundColor: "dodgerblue",
    borderRadius: "100%",
    position: "fixed",
    zIndex: 1000,
    top: "20px",
    left: "20px",
    outline: "none",
  },
  container2: {
    position: "fixed",
    zIndex: 1000,
    textAlign: "center",
    pointerEvents: "none",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Montserrat",
    padding: "20px",
    cursor: "none",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
  },
};
