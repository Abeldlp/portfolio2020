import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import laptop from "../PorfolioImages/laptop.png";

export default class School extends Component {
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
        <h1>SCHOOL</h1>
        <Link to="/code">Back</Link>
        <img src={laptop} alt="logo" style={styles.image} />
        <p style={styles.text}>
          Project using HTML and CSS. This is one of my oldest projects and it
          is a simple page desing but fully responsive. This was the first page
          where I implemented images, icons, videos and a fully mobile friendly
          design.
        </p>
        <a href="">View Live website</a>
        <br />
        <a href="">View source code</a>
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
