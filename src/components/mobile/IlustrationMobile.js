import React, { Component } from "react";
import { motion } from "framer-motion";
import ilustration1 from "../../PorfolioImages/ilustration1-min.png";
import ilustration2 from "../../PorfolioImages/ilustration2-min.png";
import ilustration3 from "../../PorfolioImages/ilustration3-min.png";
import ilustration4 from "../../PorfolioImages/ilustration4-min.png";

export default class Code extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      //scale: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      //scale: 0,
      y: "-100%",
    },
  };

  pageSettings = {
    duration: 0.5,
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
            paddingTop: "35px",
          }}
        >
          Illustrations
        </h1>
        <p
          style={{
            width: "80%",
            paddingBottom: 10,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          Illustrations for web designs
        </p>
        <p
          style={{
            width: "80%",
            paddingBottom: 10,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          The illustrations below were made with procreate. The quality of the
          image has been compressed for a better experience.
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
    maxHeight: "40vh",
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
