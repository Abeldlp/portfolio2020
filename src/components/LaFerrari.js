import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import laptop from "../PorfolioImages/FerrariPhoto.png";

export default class LaFerrari extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0,
    },
  };

  pageSettings = {
    duration: 0.5,
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/code" style={{ textDecoration: "none" }}>
            <p
              style={{
                fontFamily: "Roboto",
                color: "dodgerblue",
                fontWeight: "bold",
                letterSpacing: "1px",
                padding: "10px",
              }}
            >
              Back
            </p>
          </Link>
        </motion.div>
        <motion.img
          src={laptop}
          alt="logo"
          style={styles.image}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ delay: 0.5 }}
        />
        <motion.h1
          style={{ fontFamily: "Montserrat" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          La Ferrari
        </motion.h1>
        <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
        >
          Simple, yet powerful design to show the La Ferrari's latest model.
          Fully responsive landing page.
        </motion.p>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%",
          }}
        >
          <motion.a
            href="https://abeldlp.github.io/ferraridesign/"
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
            View Live website
          </motion.a>
        </motion.div>
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
