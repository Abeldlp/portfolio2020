import React, { Component } from "react";
import { motion } from "framer-motion";

//IMAGES IMPORT HOLDER
import html from "../PorfolioImages/html.png";
import css from "../PorfolioImages/css.png";
import javascript from "../PorfolioImages/javascript.png";
import mongo from "../PorfolioImages/mongo.png";
import node from "../PorfolioImages/node.png";
import reactimage from "../PorfolioImages/react.png";
import express from "../PorfolioImages/express.png";

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
        <h1
          style={{
            fontFamily: "Montserrat",
          }}
        >
          <span style={{ color: "dodgerblue", fontSize: "30px" }}>Fullstack</span>
          Web Developer
          <span style={{ color: "dodgerblue", fontSize: "40px" }}>-</span>
        </h1>
        {/*CARREER SECTION*/}
        <h3 style={styles.p}>
          Path<span style={{ color: "dodgerblue", fontSize: "60px" }}>.</span>
        </h3>

        <p style={styles.p}>
          Fullstack web developer with an enphasys on responsive design.
          <br />
          Able to maintain clean and reusable code troughout the project.
          <br />
          Following the less is more rule design.
          <br />
          Always willing to learn for new libraries for a project.
        </p>
        <h3 style={styles.p}>
          <span style={{ color: "dodgerblue" }}>-</span>Skills
          <span style={{ color: "dodgerblue" }}>-</span>
        </h3>
        <div style={styles.image_container_master}>
          {/*FRONTEND SECTION*/}
          <div style={styles.frontbackcontainer}>
            <h3 style={styles.p}>Frontend</h3>
            <div style={styles.image_container}>
              <img style={styles.image} src={html} alt="logo" />
              <img style={styles.image} src={css} alt="logo" />
              <img style={styles.image} src={javascript} alt="logo" />
              <img style={styles.image} src={reactimage} alt="logo" />
            </div>
          </div>

          {/*BACKEND SECTION*/}
          <div style={styles.frontbackcontainer}>
            <h3 style={styles.p}>Backend</h3>
            <div style={styles.image_container}>
              <img style={styles.image} src={mongo} alt="logo" />
              <img style={styles.image} src={node} alt="logo" />
              <img style={styles.image} src={express} alt="logo" />
            </div>
          </div>
        </div>
        {/*<h3 style={styles.p}>MERN</h3>
        <p style={styles.p}>
          Most of the applications or websites I make are created using the MERN
          Stack, React.js for the Frontend, Express.js and Node.js for the
          Backend and MongoDB as Database.
        </p>*/}
      </motion.div>
    );
  }
}

const styles = {
  p: {
    width: "80%",
    fontFamily: "Roboto",
  },
  image_container: {
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: "2.5rem",
  },
  photome: {
    height: "100%",
  },
  image_container_master: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  frontbackcontainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    border: "1px solid dodgerblue",
    //backgroundColor:"rgba(30, 143, 255, 0.2)"
  },
};
