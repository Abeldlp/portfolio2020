import React, { Component } from "react";
import { motion } from "framer-motion";

//IMAGES IMPORT HOLDER
import html from "../PorfolioImages/html.png";
import css from "../PorfolioImages/css.png";
import javascript from "../PorfolioImages/javascript.png";
import mongo from "../PorfolioImages/mongo.png";
import node from "../PorfolioImages/node.png";
import reactimage from "../PorfolioImages/react.png";

//--------------------

export default class Me extends Component {
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
        <h1>Dev_Me</h1>

        <div style={styles.image_container}>
          <div style={styles.image_container_row}>
            <img style={styles.image} src={html} alt="logo" />
            <img style={styles.image} src={css} alt="logo" />
            <img style={styles.image} src={javascript} alt="logo" />
          </div>
          <div style={styles.image_container_row}>
            <img style={styles.image} src={mongo} alt="logo" />
            <img style={styles.image} src={reactimage} alt="logo" />
            <img style={styles.image} src={node} alt="logo" />
          </div>
        </div>
        <h2 style={styles.p}>GIVE ME THE FULLSTACK!</h2>
        <p style={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste cum,
          eos maxime voluptatibus aliquid reprehenderit natus ratione nemo
          iusto, dolores facilis vitae. Similique dolor, voluptates iusto quas
          beatae necessitatibus!
        </p>
      </motion.div>
    );
  }
}

const styles = {
  p: {
    width: "90%",
  },
  image_container: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 18,
    boxShadow: "0px 3px 10px 0px grey",
  },
  image: {
    height: 80,
  },
  photome: {
    height: "100%",
  },
};
