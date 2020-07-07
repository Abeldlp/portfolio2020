import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import laptop from "../PorfolioImages/laptop.png";

export default class Construction extends Component {
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
    duration: 1,
    transition: "linear",
  };

  render() {
    return (
      <motion.div
        className="secondary-screen"
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
        style={{ overflow: "auto" }}
      >
        <h1>CONSTRUCTION</h1>
        <Link to="/code">Back</Link>
        <img src={laptop} alt="logo" style={styles.image} />
        <p style={styles.text}>
          Construction website for a client from Spain. Frontend fully coded and
          backend server to handle nodemailer to recieve messages from clients.
          The webstite uses React for the frontend and Node.js, and nodemailer
          for the backend. This is an old project but I comepletely rebuilt it
          on React for a more app like looking.
        </p>
        <a
          href="https://constructionfjd.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live website
        </a>
        <br />
        <a href="/#">View source code</a>
      </motion.div>
    );
  }
}

const styles = {
  image: {
    width: "50%",
  },
  text: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
};
