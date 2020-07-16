import React, { Component } from "react";
import { motion } from "framer-motion";
import ilustration1 from "../PorfolioImages/ilustration1-min.png";
import ilustration2 from "../PorfolioImages/ilustration2-min.png";
import ilustration3 from "../PorfolioImages/ilustration3-min.png";
import ilustration4 from "../PorfolioImages/ilustration4-min.png";

export default class Code extends Component {
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
      >
        <h1 style={{ fontFamily: "Montserrat", color: "dodgerblue" }}>
          Ilustrations
        </h1>
        <p style={{ width: "80%", paddingBottom: 10, fontFamily: "Roboto" }}>
          Ilustrations for web designs
        </p>
        <p style={{ width: "80%", paddingBottom: 10, fontFamily: "Roboto" }}>
          Most of this ilustrations have been made using procreate. The quality
          of the image has been compressed for a better experience.
        </p>
        <motion.div style={styles.main_container}>
          <motion.img
            style={styles.secondary_container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            src={ilustration3}
          />

          <motion.img
            style={styles.secondary_container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.6 }}
            src={ilustration2}
          />

          <motion.img
            style={styles.secondary_container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.8 }}
            src={ilustration1}
          />

          <motion.img
            style={styles.secondary_container}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.9 }}
            src={ilustration4}
          />
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
    maxWidth: "80%",
    maxHeight: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "30px",
  },
  anchors: {
    textDecoration: "none",
    color: "white",
  },
};