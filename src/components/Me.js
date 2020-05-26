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
          <img style={styles.image} src={html} />
          <img style={styles.image} src={css} />
          <img style={styles.image} src={javascript} />
          <img style={styles.image} src={mongo} />
          <img style={styles.image} src={reactimage} />
          <img style={styles.image} src={node} />
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
    width: "80%",
    height: "20%",
    display: "flex",
    justifyContent: "space-around",
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
