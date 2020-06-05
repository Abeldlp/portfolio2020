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
          Since the day I sarted coding I knew I wanted no matter what I learned
          it never was enough. Ever since, has been a battle for learning new
          libraries and frameworks to make myself a better developer. I sarted
          with a HTML, CSS, JAVASCRIPT, and then moved on to the backend,
          NODE.js and EXPRESS. Then I started using databases with SQL, but
          never felt like that was interesting enough.Finally I started using
          React for frontend and MongoDB for Database management.
          <hr />
          Normally I work with the MERN Stack, MongoDB, EXPRESS, React and
          Node.js but wouldnt mind to learn a different source if neccesary.
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
