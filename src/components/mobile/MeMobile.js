import React, { Component } from "react";
import { motion } from "framer-motion";

//IMAGES IMPORT HOLDER
import html from "../../PorfolioImages/html.png";
import css from "../../PorfolioImages/css.png";
import javascript from "../../PorfolioImages/javascript.png";
import mongo from "../../PorfolioImages/mongo.png";
import node from "../../PorfolioImages/node.png";
import reactimage from "../../PorfolioImages/react.png";
import express from "../../PorfolioImages/express.png";
import figma from "../../PorfolioImages/figmalogo.png";
import heroku from "../../PorfolioImages/herokulogo.png";
import netlify from "../../PorfolioImages/netlifylogo.png";
import procreate from "../../PorfolioImages/procreatelogo.png";
import githubicon from "../../icons/github.png";
import jQuery from "../../PorfolioImages/jQuery-logo.png";
import Boot from "../../PorfolioImages/bootstrap.png";
import sql from "../../PorfolioImages/pngegg.png";
import php from "../../PorfolioImages/php.png";
import laravel from "../../PorfolioImages/laravel.png";

//--------------------

export default class MeMobile extends Component {
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
    transition: {
      delayChildren: 0.5,
    },
  };

  render() {
    return (
      <motion.div
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          <span style={{ color: "dodgerblue", fontSize: "30px" }}>
            Fullstack
          </span>
          <br />
          Web Developer
          <span style={{ color: "dodgerblue", fontSize: "40px" }}>-</span>
        </h1>
        {/*CARREER SECTION*/}
        <motion.h3
          style={styles.path}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
        >
          Path<span style={{ color: "dodgerblue", fontSize: "60px" }}>.</span>
        </motion.h3>
        {/**/}
        <motion.p
          style={styles.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
        >
          Experienced fullstack web developer creating beautiful designs on the
          frontend and keeping a clean and scalable code on the backend. Coding
          pure Javascript or php is not a problem, but for more effectiveness I
          like using libraries like React , Express or frameworks like Laravel.
        </motion.p>
        <motion.h3
          style={styles.pskill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <span style={{ color: "dodgerblue" }}>-</span>Skills
          <span style={{ color: "dodgerblue" }}>-</span>
        </motion.h3>
        <div style={styles.image_container_master}>
          {/*FRONTEND SECTION*/}
          <motion.div
            style={styles.frontcontainer}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.8 }}
          >
            <h3 style={styles.p1}>Frontend</h3>
            <div style={styles.image_container}>
              <div style={styles.logo_container}>
                <img style={styles.image} src={html} alt="logo" />
                <p style={styles.plogo}>HTML</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={css} alt="logo" />
                <p style={styles.plogo}>CSS</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={javascript} alt="logo" />
                <p style={styles.plogo}>JavaScript</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={reactimage} alt="logo" />
                <p style={styles.plogo}>React</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={jQuery} alt="logo" />
                <p style={styles.plogo}>jQuery</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={Boot} alt="logo" />
                <p style={styles.plogo}>Bootstrap</p>
              </div>
            </div>
          </motion.div>

          {/*BACKEND SECTION*/}
          <motion.div
            style={styles.backcontainer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.8 }}
          >
            <h3 style={styles.p1}>Backend</h3>
            <div style={styles.image_container}>
              <div style={styles.logo_container}>
                <img style={styles.image} src={node} alt="logo" />
                <p style={styles.plogo}>Node.js</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={mongo} alt="logo" />
                <p style={styles.plogo}>MongoDB</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={express} alt="logo" />
                <p style={styles.plogo}>Express</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={sql} alt="logo" />
                <p style={styles.plogo}>SQL</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={laravel} alt="logo" />
                <p style={styles.plogo}>Laravel</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={php} alt="logo" />
                <p style={styles.plogo}>PHP</p>
              </div>
            </div>
          </motion.div>
          {/*FRONTEND SECTION*/}
          <motion.div
            style={styles.frontcontainer}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.8 }}
          >
            <h3 style={styles.p1}>Tools</h3>
            <div style={styles.image_container}>
              <div style={styles.logo_container}>
                <img style={styles.image} src={figma} alt="logo" />
                <p style={styles.plogo}>Figma</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={githubicon} alt="logo" />
                <p style={styles.plogo}>Github</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={heroku} alt="logo" />
                <p style={styles.plogo}>Heroku</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={netlify} alt="logo" />
                <p style={styles.plogo}>Netlify</p>
              </div>
              <div style={styles.logo_container}>
                <img style={styles.image} src={procreate} alt="logo" />
                <p style={styles.plogo}>Procreate</p>
              </div>
            </div>
          </motion.div>
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
    paddingTop: "20px",
    width: "80%",
    fontFamily: "Roboto",
    textAlign: "left",
    margin: "auto",
  },
  p1: {
    width: "90%",
    fontFamily: "Roboto",
    textAlign: "center",
    margin: "10px auto",
  },
  pskill: {
    width: "90%",
    fontFamily: "Roboto",
    textAlign: "center",
    margin: "15px auto",
  },
  plogo: {
    fontFamily: "Roboto",
    textAlign: "right",
  },
  logo_container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  path: {
    width: "80%",
    fontFamily: "Montserrat",
    textAlign: "left",
    paddingLeft: "20px",
    borderBottom: "1.5px solid dodgerblue",
    margin: "auto",
  },
  image_container: {
    padding: 10,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    flexDirection: "column",
  },
  image: {
    height: "2.5rem",
  },
  image2: {
    height: "2.3rem",
  },
  photome: {
    height: "100%",
  },
  image_container_master: {
    maxWidth: "80%",
    minWidth: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    flexWrap: "wrap",
  },
  frontcontainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "20px",
    borderTop: "1.5px solid dodgerblue",
    borderRight: "1.5px solid dodgerblue",
    width: "60%",
    //backgroundColor:"rgba(30, 143, 255, 0.2)"
  },
  backcontainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "20px",
    borderTop: "1.5px solid dodgerblue",
    borderLeft: "1.5px solid dodgerblue",
    width: "60%",
    //backgroundColor:"rgba(30, 143, 255, 0.2)"
  },
};
